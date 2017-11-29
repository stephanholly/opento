import axios from 'axios'

export const getAllUsers = (id) => {
  return {
    type: 'GET_ALL_USERS',
    payload: axios.get(`http://localhost:3000/users/all/` + `${id}`)
  };
}
