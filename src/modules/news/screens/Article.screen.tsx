import {RouteProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

import ArrowIcon from 'components/icons/ArrowIcon';
import ArticleBG from 'modules/auth/assets/redentu_logo.png';
import theme from 'theme/theme';

type ArticleRouterProps = {
  route: RouteProp<
    {
      ArticleProps: {
        title: string;
        author: string;
        image: string;
        published: Date;
        content: string;
      };
    },
    'ArticleProps'
  >;
};

const ArticleScreen = ({route}: ArticleRouterProps) => {
  const navigation = useNavigation();
  const {title, author, image, published, content} = route.params;

  const {height} = Dimensions.get('window');

  const publicDat = new Date(published);
  const month = publicDat.getMonth();
  const day = publicDat.getDate();
  const year = publicDat.getFullYear();

  return (
    <Container>
      <TopPart>
        <ArticleImage
          source={{
            uri: image,
          }}
        />
      </TopPart>
      <ContentSection height={height * 0.6}>
        <BG>
          <ArticleBGImage source={ArticleBG} />
        </BG>

        <Content>
          <Spacer height={20} />

          <Text centered size={20}>
            {title}
          </Text>

          <Spacer height={15} />

          <Text size={12} italic>
            Author: {author}
          </Text>

          <Text size={12} italic>
            Date: {day} {month} {year}
          </Text>

          <Spacer height={20} />

          <Text size={16}>{content}</Text>
        </Content>
      </ContentSection>
      <GoBackButtonContainer onPress={() => navigation.goBack()}>
        <ArrowIcon width={25} height={25} color={theme.colors.white} />
      </GoBackButtonContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.darkBlue};
`;

const GoBackButtonContainer = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Spacer = styled.View<{height: number}>`
  width: 100%;
  height: ${(props) => props.height}px;
`;

const BG = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
  opacity: 0.3;
`;

const Content = styled.View`
  flex: 1;
  padding: 0 15px;
`;

const Text = styled.Text<{
  centered?: boolean;
  color?: string;
  size?: number;
  italic?: boolean;
}>`
  font-size: ${(props) => (props.size ? props.size : 18)}px;
  color: ${(props) => (props.color ? props.color : props.theme.colors.white)};
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
`;

const ArticleBGImage = styled.Image`
  width: 150px;
  height: 150px;
`;

const TopPart = styled.View`
  width: 100%;
  height: 35%;
  background-color: ${(props) => props.theme.colors.whiteDarken};
`;

const ArticleImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const ContentSection = styled.ScrollView<{height: number}>`
  height: ${(props) => props.height}px;
`;

export default ArticleScreen;
