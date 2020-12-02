import AsyncStorage from '@react-native-community/async-storage';

const reduxPersist = {
  active: true,
  reducerVersion: '1',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    whitelist: ['auth', 'profile'],
  },
};

export default reduxPersist;
