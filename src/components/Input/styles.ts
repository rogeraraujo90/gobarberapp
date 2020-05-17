import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused?: boolean;
  isErrored?: boolean;
}

const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  border-width: 2px;
  border-color: #232129;

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: #c53030;
    `};

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: #ff9000;
    `};
`;

const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
`;

const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export { Container, TextInput, Icon };
