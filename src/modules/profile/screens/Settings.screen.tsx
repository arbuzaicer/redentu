import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';

import Button from 'components/Buttons';
import Input from 'components/Input';
import {updateProfileData} from 'modules/auth/auth.actions';
import theme from 'theme/theme';

import {Routes} from '../../../Routes';

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {height} = Dimensions.get('window');

  const [userName, setUserName] = useState<string>('');
  const [userSureName, setUserSureName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');

  const isStringValid = (value: string) => (value.trim() ? value.trim() : null);

  const handleSubmit = () => {
    const isNameValid = isStringValid(userName);
    const isSureNameValid = isStringValid(userSureName);
    const isEmailValid = isStringValid(userEmail);

    dispatch(
      updateProfileData({
        name: isNameValid,
        sureName: isSureNameValid,
        email: isEmailValid,
      }),
    );
    setUserName('');
    setUserSureName('');
    setUserEmail('');
    navigation.navigate(Routes.Profile);
  };

  return (
    <Container colors={[`${theme.colors.blue}`, `${theme.colors.darkBlue}`]}>
      <Text size={32} weight={700}>
        Edit profile
      </Text>

      <Spacer height={60} />

      <Input
        value={userName}
        setValue={setUserName}
        placeholder="Edit user name"
        noImage
      />

      <Spacer height={25} />

      <Input
        value={userSureName}
        setValue={setUserSureName}
        placeholder="Edit user sure name"
        noImage
      />

      <Spacer height={25} />

      <Input
        value={userEmail}
        setValue={setUserEmail}
        placeholder="Edit user email"
        noImage
      />

      <ButtonContainer top={height * 0.85}>
        <ButtonInnerContainer>
          <Button
            label="Submit changes"
            onPress={handleSubmit}
            labelColor={theme.colors.darkBlue}
          />
        </ButtonInnerContainer>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled(LinearGradient)`
  flex: 1;
  padding: 40px 25px;
  align-items: center;
`;

const Text = styled.Text<{
  centered?: boolean;
  color?: string;
  size?: number;
  italic?: boolean;
  weight?: number;
}>`
  font-size: ${(props) => (props.size ? props.size : 18)}px;
  color: ${(props) => (props.color ? props.color : props.theme.colors.white)};
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  font-weight: ${(props) => (props.weight ? props.weight : 200)};
`;

const Spacer = styled.View<{
  height: number;
}>`
  width: 100%;
  height: ${(props) => props.height}px;
`;

const ButtonContainer = styled.View<{top: number}>`
  width: 100%;
  height: 35px;
  position: absolute;
  top: ${(props) => props.top}px;
  align-items: center;
  justify-content: center;
`;

const ButtonInnerContainer = styled.View`
  width: 60%;
`;

export default SettingsScreen;
