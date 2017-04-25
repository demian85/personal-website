import types from '../actions/types';

const defaults = {
  user: null,
};

function reducer(prevState = defaults, action) {
  const state = Object.assign({}, prevState);

  switch (action.type) {

    case types.LOGIN:
      state.user = action.user;
      break;

    default:
      return state;
  }

  return state;
}

module.exports = reducer;
