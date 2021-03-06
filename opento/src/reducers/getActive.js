export default(state = [], action) => {
  switch (action.type) {
    case 'GET_ACTIVE_FULFILLED':
      return [...action.payload.data]
    case 'ADD_ACTIVE_FULFILLED':
      return state.concat(action.payload.data)
    default:
      return state;
  }
}
