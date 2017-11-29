import firebase from 'axios';

export const locationInput = (location) => {
  return {
    type: 'LOCATION_INPUT',
    payload: location
  };
};


export const createEvent = (info) => {
  console.log(info);
  return {
    type: 'CREATE_EVENT',
    payload: axios.post(`http://localhost:3000/createevent/`, info)
    .catch((error) => {
      console.log(error);
    })
  };
}
