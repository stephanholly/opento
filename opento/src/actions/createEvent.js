import axios from 'axios';

export const locationInput = (location) => {
  return {
    type: 'LOCATION_INPUT',
    payload: location
  };
};


export const createEvent = (location, user) => {

  return {
    type: 'CREATE_EVENT',
    payload: axios.post(`http://localhost:3000/createevent/` + `${location}`, user)
    .catch((error) => {
      console.log(error);
    })
  };
}


export const addFriendToEvent = (id) => {
  return {
    type: 'ADD_FRIEND',
    payload: id
  };
};
