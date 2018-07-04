import * as TYPE from "../Const";

var defaultState = {
  isError: false,
  isLoading: false,
  posts: null
};

const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TYPE.FETCH_REQUEST:
      return { ...state , isLoading: !state.isLoading };

    case TYPE.FETCH_SUCCESS:
      return { ...state , posts: action.data };

    case TYPE.FETCH_ERROR:
      return { ...state, isError: !state.isError };

    default:
      return state;
  }
  return state;
};

export default productReducer;
