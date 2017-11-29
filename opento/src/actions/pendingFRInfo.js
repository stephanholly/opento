import axios from 'axios'

export const pendingFRInfo = (id) => {
  return {
    type: 'PENDING_FR_INFO',
    payload: axios.get(`http://localhost:3000/users/pendingfrinfo/`+`${id}`)
  };
}

export const acceptFR = (myid, friendid) => {
  return {
    type: 'ACCEPT_FR',
    payload: axios.post(`http://localhost:3000/users/acceptfriend/`+`${myid}` + `/${friendid}`)
  };
}

export const denyFR = (myid, friendid) => {
  return {
    type: 'DENY_FR',
    payload: axios.delete(`http://localhost:3000/users/denyfriend/`+`${myid}` + `/${friendid}`)
  };
}
