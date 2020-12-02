import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

import AuthReducer, {
  STATE_KEY as AUTH_STATE_KEY,
} from 'modules/auth/auth.reducer';
import reduxPersist from 'modules/config/redux-persist.config';

const rootReducer = combineReducers({
  [AUTH_STATE_KEY]: AuthReducer,
});

export default persistReducer(reduxPersist.storeConfig, rootReducer);
