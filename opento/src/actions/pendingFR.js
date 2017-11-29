import axios from 'axios';

export const pendingFR = (id) => {
  return {
    type: 'PENDING_FR',
    payload: axios.get(`http://localhost:3000/users/pendingfr/`+`${id}`)
  };
}
