import axios from 'axios'

export const getMyEvents = (username) => {
  return {
    type: 'GET_MY_EVENTS',
    payload: axios.get(`http://localhost:3000/users/myevents/` + `${username}`)
  };
}
