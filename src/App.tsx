import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components/native';

import StatusBar from 'components/StatusBar';
import store from 'store/store';
import theme from 'theme/theme';

import AppRoutes from './AppRoutes';

const {stor, persist} = store({}, null);

const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={stor}>
          <PersistGate loading={null} persistor={persist}>
            <Container>
              <SafeAreaProvider>
                <StatusBar />
                <AppRoutes />
              </SafeAreaProvider>
            </Container>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  );
};

const Container = styled.View`
  flex: 1;
`;

export default App;
