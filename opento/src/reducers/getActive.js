export default(state = [], action) => {
  switch (action.type) {
    case 'GET_ACTIVE_FULFILLED':
      return [...action.payload.data]
    default:
      return state;
  }
}
