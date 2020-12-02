import {applyMiddleware, createStore} from 'redux';
import {persistStore} from 'redux-persist';

import {enableHotReload, purgeLocalStore} from './helpers';
import loggerMiddleware from './middlewares/logger.middleware';
import rootReducer from './rootReducer';

const store = (initialState: any, onComplete: any) => {
  const middlewares = [];

  if (__DEV__) {
    middlewares.push(loggerMiddleware);
  }

  const stor = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );

  const persist = persistStore(stor);

  purgeLocalStore(stor, onComplete);
  enableHotReload(stor);

  return {stor, persist};
};

export default store;
