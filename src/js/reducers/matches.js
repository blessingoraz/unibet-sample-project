import ActionTypes from '../constants/actionTypes';

import { initialState } from '../config/initialState';

const reducer = (state = initialState.matches, action) => {

  switch (action.type) {
    case ActionTypes.SET_LIVE_MATCHES:
      return { ...state, matches: action.matches };
    case ActionTypes.LOADING_MATCHES:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};
export default reducer;
