export default(state = [], action) => {
  switch (action.type) {
    case 'GET_FRIENDS_FULFILLED':
      return [...action.payload.data]
    default:
      return state;
  }
}
