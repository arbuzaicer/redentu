import {Profile} from 'modules/profile/types';
import {AnyAction} from 'redux';
import {AUTHENTICATION, LOGOUT} from './auth.actions';

export const STATE_KEY = 'auth';

type AuthState = {
  isAuthenticated: boolean;
  profile: null | Profile;
};

const initialState = {
  isAuthenticated: false,
  profile: null,
};

const AuthReducer = (state: AuthState = initialState, action: AnyAction) => {
  switch (action.type) {
    case AUTHENTICATION: {
      const profile = action.payload.data;

      return {...state, isAuthenticated: true, profile};
    }
    case LOGOUT: {
      return {...state, isAuthenticated: false};
    }
    default: {
      return initialState;
    }
  }
};

export const getIsAuthenticated = (state: Record<string, any>): boolean =>
  state[STATE_KEY].isAuthenticated;

export const getProfile = (state: Record<string, any>): Profile =>
  state[STATE_KEY].profile;

export default AuthReducer;
