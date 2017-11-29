import axios from 'axios';

export const getUser = (uid) => {
  return {
    type: 'GET_USER',
    payload: axios.get(`http://localhost:3000/users/`+`${uid}`)
  };
}


export const getEventSum = (uid) => {
  console.log("eventsum action",uid)
  return {
    type: 'GET_EVENT_SUM',
    payload: axios.get(`http://localhost:3000/events/eventsum/`+`${uid}`)
  };
}


export const getFriendsTotal = (uid) => {
  console.log(uid);
  return {
    type: 'GET_FRIENDS_TOTAL',
    payload: axios.get(`http://localhost:3000/friendships/`+`${uid}`)
  };
}


export const getClickSum = (uid) => {
  return {
    type: 'GET_CLICK_SUM',
    payload: axios.get(`http://localhost:3000/events/clicksum/`+`${uid}`)
  };
}

export const getFriendIds = (id) => {
return {
  type: 'GET_FRIEND_IDS',
  payload: axios.get(`http://localhost:3000/users/friendshipids/`+`${id}`)
};
}
