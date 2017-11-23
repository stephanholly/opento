const initialState = {
  toggleForm: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE':
    console.log(state)
      return { ...state, toggleForm: !state.toggleForm };
    default:
      return state;
  }
};
