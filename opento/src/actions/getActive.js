import axios from 'axios'

export const getActive = (uid) => {
  return {
    type: 'GET_ACTIVE',
    payload: axios.get(`http://localhost:3000/users/active/` + `${uid}`)
  };
}


export const addActive = (myid, eventid) => {
  console.log("eventid", eventid)
    console.log("myid", myid)
  return {
    type: 'ADD_ACTIVE',
    payload: axios.post(`http://localhost:3000/users/active/add/` + `${eventid}` + `/${myid}`)
  };
}
