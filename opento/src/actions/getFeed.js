import axios from 'axios'

export const getFeed = (uid) => {
  return {
    type: 'GET_FEED',
    payload: axios.get(`http://localhost:3000/users/feed/` + `${uid}`)
  };
}
