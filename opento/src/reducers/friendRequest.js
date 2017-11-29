export default(state = [], action) => {
  switch (action.type) {
      case 'FRIENDREQUEST_FULFILLED':
        return [...action.payload.data]
    default:
      return state;
  }
}
