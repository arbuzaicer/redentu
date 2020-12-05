import React from 'react';
import styled from 'styled-components/native';

type ButtonProps = {
  label: string;
  labelColor?: string;
  bgColor?: string;
  disabled?: boolean;
  onPress: () => void;
};

const Button = ({
  label,
  labelColor,
  bgColor,
  disabled = false,
  onPress,
}: ButtonProps) => (
  <Container
    onPress={onPress}
    bgColor={bgColor}
    activeOpacity={0.8}
    disabled={disabled}>
    <Label color={labelColor}>{label}</Label>
  </Container>
);

const Container = styled.TouchableOpacity<{bgColor?: string}>`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.disabled
      ? props.theme.colors.gray
      : props.bgColor
      ? props.bgColor
      : props.theme.colors.white};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
`;

const Label = styled.Text<{color?: string}>`
  color: ${(props) => (props.color ? props.color : props.theme.colors.white)};
  font-size: 18px;
  font-weight: 700;
`;

export default Button;
