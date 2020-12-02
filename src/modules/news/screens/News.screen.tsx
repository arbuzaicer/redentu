import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import Article from '../components/Article';

const NEWS_API_KEY = '9adc34f09d224db7a3fe363f14c92741';

const NewsScreen = () => {
  const [articles, setArticles] = useState<any>(null);

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-04&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`,
      )
      .then((data: any) => {
        setArticles(data.data.articles);
      });
  }, []);

  return (
    <Container>
      <TopSection>
        <Text size={24}>News</Text>
      </TopSection>

      {articles && (
        <ArticlesSection>
          <FlatList
            data={articles}
            keyExtractor={(el: any, index: number) =>
              `key-code: ${el.author + index}`
            }
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}: any) => (
              <Article
                index={index}
                author={item.author}
                title={item.title}
                content={item.content}
                image={item.urlToImage}
                description={item.description}
                published={item.publishedAt}
              />
            )}
          />
        </ArticlesSection>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
  background-color: ${(props) => props.theme.colors.whiteDarken};
`;

const TopSection = styled.View`
  height: 40%;
  background-color: ${(props) => props.theme.colors.darkBlue};
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text<{size?: number}>`
  font-size: ${(props) => (props.size ? props.size : 18)}px;
  font-weight: 700;
  color: white;
`;

const ArticlesSection = styled.View`
  width: 100%;
  flex: 1;
`;

export default NewsScreen;
