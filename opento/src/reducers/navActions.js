export default(state = '', action) => {
  switch (action.type) {
    case 'GET_ID':
      return action.payload;
    default:
      return state
  }
}
