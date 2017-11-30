export default(state = [], action) => {
  switch (action.type) {
    case 'GET_MY_EVENTS_FULFILLED':
      return [...action.payload.data]
    case 'DELETE_MY_EVENTS_FULFILLED':
      return state.filter( item => item.id.toString() !== action.payload.data)
    default:
      return state;
  }
}
