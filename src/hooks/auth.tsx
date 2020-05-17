import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface SessionData {
  token: string;
  loggedUser: object;
}

interface Credentials {
  email: string;
  password: string;
}

interface AuthContextData {
  loggedUser: object;
  signIn(credentials: Credentials): Promise<void>;
  signOut(): void;
  isAuthenticated(): boolean;
  isFetchingLoggedUser: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthContextProvider: React.FC = ({ children }) => {
  const [sessionData, setSessionData] = useState<SessionData>(
    {} as SessionData
  );

  const [isFetchingLoggedUser, setIsFetchingLoggedUser] = useState(true);

  useEffect(() => {
    async function doSignIn(): Promise<void> {
      const token = await AsyncStorage.getItem('@GoBarber:token');
      const loggedUser = await AsyncStorage.getItem('@GoBarber:loggedUser');

      if (token && loggedUser) {
        setSessionData({ token, loggedUser: JSON.parse(loggedUser) });
      }

      setIsFetchingLoggedUser(false);
    }

    doSignIn();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user: loggedUser } = response.data;

    await AsyncStorage.setItem('@GoBarber:token', token);
    await AsyncStorage.setItem(
      '@GoBarber:loggedUser',
      JSON.stringify(loggedUser)
    );

    setSessionData({ token, loggedUser });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@GoBarber:token');
    await AsyncStorage.removeItem('@GoBarber:loggedUser');

    setSessionData({} as SessionData);
  }, []);

  const isAuthenticated = useCallback(() => {
    return !!sessionData.loggedUser;
  }, [sessionData.loggedUser]);

  return (
    <AuthContext.Provider
      value={{
        loggedUser: sessionData.loggedUser,
        signIn,
        signOut,
        isAuthenticated,
        isFetchingLoggedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthContextProvider.');
  }

  return context;
};

export { AuthContextProvider, useAuth };
