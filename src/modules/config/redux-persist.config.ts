import AsyncStorage from '@react-native-community/async-storage';

const reduxPersist = {
  active: true,
  reducerVersion: '1',
  storeConfig: {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth'],
    timeout: undefined,
  },
};

export default reduxPersist;
