const initialState = {
  phrase: ''

};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PHRASE_INPUT':
      return { ...state, phrase: action.payload };
    default:
      return state;
  }
};
