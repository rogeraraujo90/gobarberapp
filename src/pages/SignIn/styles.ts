import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 0}px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

const ForgotPasswordText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: #f4ede8;
`;

const CreateAccount = styled.TouchableOpacity`
  flex-direction: row;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  align-items: center;
  justify-content: center;
`;

const CreateAccountText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
  color: #ff9000;
  font-size: 18px;
`;

export {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccount,
  CreateAccountText,
};
