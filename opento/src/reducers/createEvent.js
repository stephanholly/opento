const initialState = {
location: '',
clicks: 0,
eventcreatorid: '',
eventcreatorname: '',
active: true,
creatorpic: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOCATION_INPUT':
      return { ...state, location: action.payload };
    case 'CREATE_EVENT_FULFILLED':
      return {
        ...state,
        location: action.payload.location,
        clicks: 0,
        eventcreatorid: action.payload.eventcreatorid,
        eventcreatorname: action.payload.eventcreatorname,
        active: true,
        creatorpic: action.payload.creatorpic
      };
    default:
      return state;
  }
};
