import React from 'react';
import { Image } from 'react-native';
import { Container, Title } from './styles';

import logImg from '../../assets/logo.png';

const SignIn: React.FC = () => (
  <Container>
    <Image source={logImg} />
    <Title>Faça seu logon</Title>
  </Container>
);

export default SignIn;
