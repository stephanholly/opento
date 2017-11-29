import axios from 'axios'

export const getFriends = (id) => {
  return {
    type: 'GET_FRIENDS',
    payload: axios.get(`http://localhost:3000/friends/` + `${id}`)
  };
}
