import axios from 'axios'

export const friendRequest = (friendid, myid) => {
  return {
    type: 'FRIENDREQUEST',
    payload: axios.post(`http://localhost:3000/users/` + `${myid}` + `/${friendid}`)
  };
}
