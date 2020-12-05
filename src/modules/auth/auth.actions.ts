import {AnyAction} from 'redux';

import {Profile, ProfileData} from 'modules/profile/types';

const namespace = 'AUTH';

export const AUTHENTICATION = `${namespace}/AUTHENTICATION`;
export const LOGOUT = `${namespace}/LOGOUT`;
export const UPDATE_PROFILE_DATA = `${namespace}/UPDATE_PROFILE_DATA`;

export const authentication = (profile: Profile): AnyAction => ({
  type: AUTHENTICATION,
  payload: {
    data: profile,
  },
});

export const logout = (): AnyAction => ({
  type: LOGOUT,
});

export const updateProfileData = (profileData: ProfileData): AnyAction => ({
  type: UPDATE_PROFILE_DATA,
  payload: {
    data: profileData,
  },
});
