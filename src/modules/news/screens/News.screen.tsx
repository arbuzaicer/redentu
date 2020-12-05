import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';

import {getNews} from 'modules/auth/auth.reducer';

import Article from '../components/Article';
import {setNewsData} from '../../auth/auth.actions';

const DEFAULT_ARTICLE_BG = 'https://cdn.hipwallpaper.com/i/81/44/mweBMY.jpg';
const NEWS_API_KEY = '9adc34f09d224db7a3fe363f14c92741';
const NEWS_BG_LINK = 'https://s3.envato.com/files/225756835/preview-image.jpg';
const NEWS_URL = `http://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;

const NewsScreen = () => {
  const dispatch = useDispatch();

  const newsData = useSelector(getNews);
  const [articles, setArticles] = useState<Array<any> | null>(newsData);

  useEffect(() => {
    if (!newsData) {
      axios.get(NEWS_URL).then((data: any) => {
        setArticles(data.data.articles);
        dispatch(setNewsData(data.data.articles));
      });
    }
  }, [dispatch, newsData]);

  return (
    <Container>
      <TopSection>
        <BG>
          <BGImage
            resizeMode="cover"
            source={{
              uri: NEWS_BG_LINK,
            }}
          />
        </BG>
        <Text size={36}>News</Text>
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
                image={item.urlToImage || DEFAULT_ARTICLE_BG}
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

const BG = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const BGImage = styled.Image`
  width: 100%;
  height: 100%;
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
  color: ${(props) => props.theme.colors.whiteDarken};
`;

const ArticlesSection = styled.View`
  width: 100%;
  flex: 1;
`;

export default NewsScreen;
