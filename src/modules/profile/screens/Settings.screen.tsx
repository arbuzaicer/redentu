import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';

const SettingsScreen = () => {
  return (
    <Container>
      <Text>Settings screen</Text>
      {/* <Button label="Logout" onPress={() => dispatch(logout())} /> */}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: blue;
`;

const Text = styled.Text`
  font-size: 24px;
`;

export default SettingsScreen;
