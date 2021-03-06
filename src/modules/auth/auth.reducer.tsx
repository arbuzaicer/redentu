import {AnyAction} from 'redux';

import {Profile} from 'modules/profile/types';

import {
  AUTHENTICATION,
  LOGOUT,
  UPDATE_PROFILE_DATA,
  SET_NEW_DATA,
} from './auth.actions';

export const STATE_KEY = 'auth';

type AuthState = {
  isAuthenticated: boolean;
  profile: null | Profile;
  news: null;
};

const initialState = {
  isAuthenticated: false,
  profile: null,
  news: null,
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
    case UPDATE_PROFILE_DATA: {
      const {name, sureName, email} = action.payload.data;
      if (state.profile) {
        return {
          ...state,
          profile: {
            ...state.profile,
            name: name ? name : state.profile.name,
            sureName: sureName ? sureName : state.profile.sureName,
            email: email ? email : state.profile.email,
          },
        };
      }
    }
    case SET_NEW_DATA: {
      const news = action.payload.data;
      return {...state, news};
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

export const getNews = (state: Record<string, any>): any =>
  state[STATE_KEY].news;

export default AuthReducer;
