const initialState = {
  friendSearchState: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FRIEND_SEARCH':
      return { ...state, friendSearchState: !state.friendSearchState}
    default:
      return state;
  }
};
