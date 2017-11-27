import axios from 'axios';

export const getFeed = (events) => {
  return {
    type: 'GET_FEED',
    payload: axios.get(`https://localhost:3000/`)
  };
}
