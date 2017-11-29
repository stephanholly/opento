export default(state = [], action) => {
  switch (action.type) {
    case 'GET_USER_FULFILLED':
      return [...action.payload.data][0]
    case 'GET_FRIEND_IDS_FULFILLED':
      return {...state, friendshipids: action.payload.data.map(function(d) { return d['id'] })}
    case 'GET_CLICK_SUM_FULFILLED':
      return {...state, clicksum: action.payload.data[0].sum}
    case 'GET_EVENT_SUM_FULFILLED':
      return {...state, eventsum: action.payload.data[0].count}
    case 'GET_FRIENDS_TOTAL_FULFILLED':
      return {...state, friendstotal: action.payload.data[0].count}
    case 'GET_EVENT_SUM_REJECTED':
      console.log(action.payload)
    default:
      return state;
  }
}
