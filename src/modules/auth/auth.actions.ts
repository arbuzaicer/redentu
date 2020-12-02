import {AnyAction} from 'redux';

import {Profile} from 'modules/profile/types';

const namespace = 'AUTH';

export const AUTHENTICATION = `${namespace}/AUTHENTICATION`;
export const LOGOUT = `${namespace}/LOGOUT`;
export const SET_CURRENT_ROUTE = `${namespace}/SET_CURRENT_ROUTE`;
export const GET_NEWS = `${namespace}/GET_NEWS`;

export const authentication = (profile: Profile): AnyAction => ({
  type: AUTHENTICATION,
  payload: {
    data: profile,
  },
});

export const logout = (): AnyAction => ({
  type: LOGOUT,
});
