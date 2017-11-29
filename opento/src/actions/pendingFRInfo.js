import axios from 'axios'

export const pendingFRInfo = (id) => {
  return {
    type: 'PENDING_FR_INFO',
    payload: axios.get(`http://localhost:3000/users/pendingfrinfo/`+`${id}`)
  };
}

export const acceptFR = (myid, friendid) => {
  console.log("myid", myid)
  console.log("friend", friendid);
  return {
    type: 'ACCEPT_FR',
    payload: axios.post(`http://localhost:3000/users/acceptfriend/`+`${myid}` + `/${friendid}`)
  };
}
