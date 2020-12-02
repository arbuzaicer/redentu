import {RouteProp} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

type ArticleRouterProps = {
  route: RouteProp<
    {
      ArticleProps: {
        index: number;
        title: string;
        author: string;
        image: string;
        published: Date;
        description: string;
        content: string;
      };
    },
    'ArticleProps'
  >;
};

const ArticleScreen = ({route}: ArticleRouterProps) => {
  const {
    index,
    title,
    author,
    image,
    published,
    description,
    content,
  } = route.params;

  return (
    <Container>
      <TopPart>
        <ArticleImage
          source={{
            uri: image,
          }}
        />
      </TopPart>
      <Text>Article screen</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.darkBlue};
`;

const Text = styled.Text`
  font-size: 24px;
`;

const TopPart = styled.View`
  width: 100%;
  height: 35%;
`;

const ArticleImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export default ArticleScreen;
