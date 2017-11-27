export default(state = [], action) => {
  switch (action.type) {
    case 'GET_MY_EVENTS_FULFILLED':
      return [...action.payload.data]
    default:
      return state;
  }
}
