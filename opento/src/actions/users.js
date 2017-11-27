import axios from 'axios'

export const getAllUsers = () => {
  return {
    type: 'GET_ALL_USERS',
    payload: axios.get(`http://localhost:3000/users/`)
  };
}
