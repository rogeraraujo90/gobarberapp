import React from 'react';
import { AuthContextProvider } from './auth';

const AppContextProvider: React.FC = ({ children }) => (
  <AuthContextProvider>{children}</AuthContextProvider>
);

export default AppContextProvider;
