export default(state = [], action) => {
  switch (action.type) {
    case 'PENDING_FR_FULFILLED':
      return {...state, pendingFR: action.payload.data.map(function(d) { return d['id'] })}
    default:
      return state;
  }
}
