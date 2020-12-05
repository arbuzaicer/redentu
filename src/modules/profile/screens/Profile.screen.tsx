import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';

import {getProfile} from 'modules/auth/auth.reducer';

const MOCK_BG_IMAGE = 'https://cdn.hipwallpaper.com/i/45/87/MOJ98S.jpg';

const ProfileScreen = () => {
  const profile = useSelector(getProfile);

  return (
    <Container>
      <TopSection>
        <Background
          source={{
            uri: MOCK_BG_IMAGE,
          }}
        />
      </TopSection>
      <ContentSection>
        <Text size={24} weight={700}>
          {profile.name} {profile.sureName}
        </Text>

        <Spacer height={15} />

        <Text size={14}>React / React Native developer</Text>

        <Spacer height={45} />

        <TextSection>
          <Text>Status: Open to work</Text>
        </TextSection>
      </ContentSection>
      <ProfileIconContainer
        style={{
          transform: [
            {
              translateY: -60,
            },
          ],
        }}>
        <ProfileIcon
          source={{
            uri: profile.photo_url,
          }}
        />
      </ProfileIconContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Background = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const TopSection = styled.View`
  width: 100%;
  height: 40%;
  align-items: center;
  background-color: ${(props) => props.theme.colors.darkBlue};
`;

const ProfileIconContainer = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: ${(props) => props.theme.colors.transparentBlack};
  z-index: 10;
  top: 40%;
`;

const ProfileIcon = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 60px;
`;

const ContentSection = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${(props) => props.theme.colors.whiteDarken};
  align-items: center;
  padding-top: 60px;
`;

const Text = styled.Text<{size?: number; weight?: number}>`
  font-size: ${(props) => (props.size ? props.size : 14)}px;
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => (props.weight ? props.weight : 200)};
`;

const Spacer = styled.View<{height: number}>`
  width: 100%;
  height: ${(props) => props.height}px;
`;

const TextSection = styled.View`
  width: 100%;
  padding: 0 30px;
`;

export default ProfileScreen;
