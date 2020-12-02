import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

import {Routes} from '../../../Routes';

export type ArticleProps = {
  index: number;
  title: string;
  author: string;
  image: string;
  published: Date;
  description: string;
  content: string;
};

const Article = ({
  index,
  title,
  author,
  image,
  published,
  description,
  content,
}: ArticleProps) => {
  const navigation = useNavigation();
  const publicDat = new Date(published);
  const month = publicDat.getMonth();
  const day = publicDat.getDate();
  const year = publicDat.getFullYear();

  const cutDescription = (value: string) =>
    value.length > 120 ? value.substr(0, 120) + '...' : value;

  return (
    <OuterContainer>
      <Container
        activeOpacity={0.7}
        isFirstItem={index === 0}
        onPress={() =>
          navigation.navigate(Routes.Article, {
            index,
            title,
            author,
            image,
            published,
            description,
            content,
          })
        }>
        <ArticleBG>
          <ArticleImage
            source={{
              uri: image,
            }}
          />
          <Filler />
        </ArticleBG>

        <Text size={16} weight={700} isCentered>
          {title}
        </Text>

        <Text size={12} weight={700} italic>
          Author: {author}
        </Text>

        <Text size={12} weight={700} italic>
          Date: {day} {month} {year}
        </Text>

        <Spacer height={30} />

        <Text>{cutDescription(description)}</Text>
      </Container>
    </OuterContainer>
  );
};

const OuterContainer = styled.View`
  width: 100%;
  align-items: center;
`;

const Container = styled.TouchableOpacity<{isFirstItem: boolean}>`
  width: 90%;
  margin-top: ${(props) => (props.isFirstItem ? 25 : 0)}px;
  height: 240px;
  border-radius: 10px;
  margin-bottom: 25px;
  padding: 5px 10px;
`;

const Spacer = styled.View<{height: number}>`
  width: 100%;
  height: ${(props) => props.height}px;
`;

const Text = styled.Text<{
  size?: number;
  weight?: number;
  isCentered?: boolean;
  italic?: boolean;
}>`
  font-size: ${(props) => (props.size ? props.size : 18)}px;
  font-weight: ${(props) => (props.weight ? props.weight : 200)};
  color: black;
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')}
  text-align: ${(props) => (props.isCentered ? 'center' : 'left')};
  width: 96%;
`;

const ArticleBG = styled.View`
  position: absolute;
  border-radius: 10px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Filler = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.white};
  opacity: 0.65;
`;

const ArticleImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

export default Article;
