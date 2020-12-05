import {DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {Drawer} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';

import LogoutIcon from 'components/icons/LogoutIcon';
import NewsIcon from 'components/icons/NewsIcon';
import ProfileIconImage from 'components/icons/ProfileIcon';
import SettingsIcon from 'components/icons/SettingsIcon';
import {logout} from 'modules/auth/auth.actions';
import {getProfile} from 'modules/auth/auth.reducer';

import {Routes} from '../../../Routes';

const DrawerCustom = (props: any) => {
  const dispatch = useDispatch();
  const profile = useSelector(getProfile);

  return (
    <Container>
      <ProfileInfo>
        <ProfileIconContainer>
          <ProfileIcon
            source={{
              uri: profile.photo_url,
            }}
            resizeMode="cover"
          />
        </ProfileIconContainer>

        <ProfileInfoContainer>
          <Text>
            {profile.name} {profile.sureName}
          </Text>
          <Text size={12}>{profile.email}</Text>
        </ProfileInfoContainer>
      </ProfileInfo>

      <Drawer.Section>
        <DrawerItem
          icon={() => <ProfileIconImage width={15} height={15} color="black" />}
          onPress={() => props.navigation.navigate(Routes.Profile)}
          label="Profile"
        />

        <DrawerItem
          icon={() => <NewsIcon width={15} height={15} color="black" />}
          onPress={() => props.navigation.navigate(Routes.News)}
          label="News"
        />

        <DrawerItem
          icon={() => <SettingsIcon width={15} height={15} color="black" />}
          onPress={() => props.navigation.navigate(Routes.Settings)}
          label="Settings"
        />
      </Drawer.Section>

      <LogoutButtonContainer>
        <LogoutBtn>
          <DrawerItem
            icon={() => <LogoutIcon width={15} height={15} color="black" />}
            onPress={() => dispatch(logout())}
            label="Logout"
          />
        </LogoutBtn>
      </LogoutButtonContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.transparentBlue};
`;

const ProfileInfo = styled.View`
  width: 100%;
  height: 100px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.theme.colors.darkBlue};
`;

const Text = styled.Text<{size?: number}>`
  font-size: ${(props) => (props.size ? props.size : 18)}px;
  color: ${(props) => props.theme.colors.white};
`;

const ProfileIcon = styled.Image`
  width: 55px;
  height: 55px;
  border-radius: 30px;
`;

const ProfileIconContainer = styled.View`
  width: 58px;
  height: 58px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const ProfileInfoContainer = styled.View`
  width: 60%;
`;

const LogoutButtonContainer = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const LogoutBtn = styled(Drawer.Section)``;

export default DrawerCustom;
