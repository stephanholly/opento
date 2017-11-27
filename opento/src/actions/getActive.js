import axios from 'axios'

export const getActive = (uid) => {
  return {
    type: 'GET_ACTIVE',
    payload: axios.get(`http://localhost:3000/users/active/` + `${uid}`)
  };
}
