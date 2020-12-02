import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import theme from 'theme/theme';

import Logo from '../assets/redentu_logo.png';
import LoginForm from '../components/LoginForm';

const LoginScreen = () => (
  <Container colors={[`${theme.colors.blue}`, `${theme.colors.darkBlue}`]}>
    <LogoIcon source={Logo} />
    <LoginForm />
  </Container>
);

const Container = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LogoIcon = styled.Image`
  position: absolute;
  opacity: 0.4;
`;

export default LoginScreen;
