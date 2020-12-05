import {applyMiddleware, createStore} from 'redux';
import {persistStore} from 'redux-persist';

import {enableHotReload} from './helpers';
import loggerMiddleware from './middlewares/logger.middleware';
import rootReducer from './rootReducer';

const store = (initialState: any) => {
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

  enableHotReload(stor);

  return {stor, persist};
};

export default store;
