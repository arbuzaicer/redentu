import React from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components/native';

import theme from 'theme/theme';

type InputProps = {
  value: string;
  percentWidth?: number;
  placeholder?: string;
  icon?: JSX.Element;
  isSecure?: boolean;
  setValue: (value: string) => void;
  onFocus?: () => void;
};

const Input = ({
  value,
  percentWidth,
  placeholder,
  icon,
  isSecure = false,
  onFocus,
  setValue,
}: InputProps) => (
  <Container width={percentWidth}>
    {icon && <IconContainer>{icon}</IconContainer>}
    <InputWrapper
      onFocus={onFocus}
      value={value}
      onChangeText={setValue}
      secureTextEntry={isSecure}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.whiteOpacityLight}
    />
  </Container>
);

const Container = styled.View<{width?: number}>`
  width: ${(props) => (props.width ? props.width : 100)}%;
  position: relative;
`;

const InputWrapper = styled(TextInput)`
  border: 2px solid ${({theme}) => theme.colors.whiteOpacity};
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  padding-left: 40px;
  color: ${({theme}) => theme.colors.white};
`;

const IconContainer = styled.View`
  position: absolute;
  height: 100%;
  justify-content: center;
  padding-left: 10px;
`;

export default Input;
