export default(state = [], action) => {
  switch (action.type) {
    case 'GET_FEED_FULFILLED':
      return [...action.payload.data]
    default:
      return state;
  }
}
