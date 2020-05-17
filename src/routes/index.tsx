import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { isAuthenticated, isFetchingLoggedUser } = useAuth();

  if (isFetchingLoggedUser) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#312e38',
        }}
      >
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return isAuthenticated() ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
