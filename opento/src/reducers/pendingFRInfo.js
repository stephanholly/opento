export default(state = [], action) => {
  switch (action.type) {
    case 'PENDING_FR_INFO_FULFILLED':
      return [...action.payload.data]
    case 'ACCEPT_FR_FULFILLED':
      return state.filter( item => item.id !== action.payload.data.friendid2)
    case 'DENY_FR_FULFILLED':
      return state.filter( item => item.id !== action.payload.data.friendid1)
    default:
      return state;
  }
}
