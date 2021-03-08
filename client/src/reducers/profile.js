import {
  GET_PROFILE,
  GET_PROFILES,
  GET_REPOS,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
} from '../actions/types';

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    //We are changing the profile from null (initial state) to the payload
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    //we are filling the empty profiles array (initial state) with the payload of user profiles
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
    case GET_REPOS:
      //We are filling the empty repos array, with the payload of repos
      return {
        ...state,
        repos: payload,
        loading: false,
      };
    //We are filling the empty error object (initial state) with the payload of errors
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    //We are resetting the profile to null and repos back to an empty array
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
      };

    default:
      return state;
  }
}
