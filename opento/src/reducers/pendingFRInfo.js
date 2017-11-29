export default(state = [], action) => {
  console.log("accept friend",action.payload)
  switch (action.type) {
    case 'PENDING_FR_INFO_FULFILLED':
      return [...action.payload.data]
    case 'ACCEPT_FR_FULFILLED':
      return state.filter( item  => item !== action.payload)
    default:
      return state;
  }
}
