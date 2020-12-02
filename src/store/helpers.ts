import AsyncStorage from '@react-native-community/async-storage';
import {persistStore} from 'redux-persist';

import reduxPersist from 'modules/config/redux-persist.config';

export const purgeLocalStore = (store: any, onComplete: any) => {
  const {reducerVersion} = reduxPersist;

  AsyncStorage.getItem('reducerVersion')
    .then((localVersion) => {
      if (localVersion !== reducerVersion) {
        persistStore(store, null, onComplete).purge();
        AsyncStorage.setItem('reducerVersion', reducerVersion);
      } else {
        persistStore(store, null, onComplete);
      }
    })
    .catch(() => {
      persistStore(store, null, onComplete);
      AsyncStorage.setItem('reducerVersion', reducerVersion);
    });
};

export const enableHotReload = (store: any) => {
  if ((module as any).hot) {
    (module as any).hot.accept(() => {
      const nextRootReducer = require('./rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }
};
