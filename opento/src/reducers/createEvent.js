const initialState = {
id: '',
location: '',
clicks: 0,
eventcreatorid: '',
eventcreatorname: '',
active: true,
creatorpic: '',
friends: [],
};

export default (state = initialState, action) => {
  console.log('action payload',action.payload)
  switch (action.type) {

    case 'LOCATION_INPUT':
      return { ...state, location: action.payload };
    case 'ADD_FRIEND':
      return {...state, friends: state.friends.concat(action.payload)};
    case 'POPULATE_INVITED_FULFILLED':
        return state
    case 'CREATE_EVENT_FULFILLED':
      return {
        ...state,
        location: action.payload.data[0].location,
        clicks: 0,
        eventcreatorid: action.payload.data[0].eventcreatorid,
        eventcreatorname: action.payload.data[0].eventcreatorname,
        active: true,
        creatorpic: action.payload.data[0].creatorpic,
        id: action.payload.data[0].id
      };
    default:
      return state;
  }
};
