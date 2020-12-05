import React, {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';

import Button from 'components/Buttons';
import UserIcon from 'components/icons/UserIcon';
import LockIcon from 'components/icons/LockIcon';
import Input from 'components/Input';
import {Profile} from 'modules/profile/types';
import theme from 'theme/theme';

import shakeAnimation from '../../../animations/ShakeAnimation';
import {authentication} from '../auth.actions';

const MOCKED_PROFILE_DATA: Profile = {
  name: 'Max',
  sureName: 'Pashynov',
  photo_url:
    'https://scontent.fiev22-2.fna.fbcdn.net/v/t1.0-9/60791317_2198461213569641_9142079185093656576_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=m0sdT2XD3AMAX85QO_g&_nc_ht=scontent.fiev22-2.fna&oh=f2e33f31fe72c666a210d62612065577&oe=5FEECC00',
  email: 'maxpachinov@gmail.com',
  linked_url: 'add linked url link later',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const shakeInitialValue = useRef(new Animated.Value(0)).current;
  const shakeValue = shakeAnimation(shakeInitialValue);

  const isButtonDisabled = Boolean(login) && Boolean(password);

  const signInHandler = () => {
    if (login.trim() === 'User' && password === '123456') {
      dispatch(authentication(MOCKED_PROFILE_DATA));
      return;
    }
    setError(true);
  };

  useEffect(() => {
    if (error) {
      shakeValue.start();
    }
    return () => {
      shakeValue.stop();
    };
  }, [shakeValue, error]);

  return (
    <Container>
      <Spacer height={60} />
      <Input
        value={login}
        percentWidth={85}
        placeholder="Login"
        icon={<UserIcon width={20} height={20} color="white" />}
        setValue={setLogin}
        onFocus={() => setError(false)}
      />
      <Spacer height={20} />
      <Input
        value={password}
        percentWidth={85}
        placeholder="Password"
        isSecure
        icon={<LockIcon width={20} height={20} color="white" />}
        setValue={setPassword}
        onFocus={() => setError(false)}
      />
      {error && (
        <ErrorContainer>
          <ErrorText style={{transform: [{translateX: shakeInitialValue}]}}>
            Incorrect username or password
          </ErrorText>
        </ErrorContainer>
      )}
      <ButtonContainer>
        <Button
          label="Sign in"
          bgColor={theme.colors.darkBlue}
          disabled={!isButtonDisabled}
          onPress={signInHandler}
        />
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.View`
  width: 80%;
  height: 300px;
  border-radius: 5px;
  align-items: center;
  background-color: ${({theme}) => theme.colors.whiteOpacity};
`;

const ButtonContainer = styled.View`
  width: 60%;
  height: 40px;
  position: absolute;
  bottom: 30px;
`;

const Spacer = styled.View<{height: number}>`
  width: 100%;
  height: ${(props) => props.height}px;
`;

const ErrorContainer = styled.View`
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 65px;
  align-items: center;
`;

const ErrorText = styled(Animated.Text)`
  color: ${({theme}) => theme.colors.red};
  font-size: 14px;
  font-weight: 700;
`;

export default LoginForm;
