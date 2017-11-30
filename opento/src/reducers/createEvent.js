const initialState = {
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
    case 'CREATE_EVENT_FULFILLED':
      return {
        ...state,
        location: action.payload.location,
        clicks: 0,
        eventcreatorid: action.payload.eventcreatorid,
        eventcreatorname: action.payload.eventcreatorname,
        active: true,
        creatorpic: action.payload.creatorpic,
        friends: action.payload.friends
      };
    default:
      return state;
  }
};
