const initialState = {
  myevents: false,
  feed: true,
  active: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MY_EVENTS':
      return { ...state, myevents: true, feed: false, active: false};
    case 'FEED':
      return { ...state, feed: true, active: false, myevents: false };
    case 'ACTIVE':
      return { ...state, active: true, myevents: false, feed: false };
    default:
      return state;
  }
};
