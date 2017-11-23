const initialState = {
  email: '',
  password: '',
  uid: '',
  error: '',
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'EMAIL_INPUT':
      return { ...state, email: action.payload };
    case 'PW_INPUT':
      return { ...state, password: action.payload };
    case 'SIGNUP_FULFILLED':
      console.log('action', action);
      return {
        ...state,
        email: action.payload.email,
        pw: '',
        uid: action.payload.uid
      };
    case 'SIGNUP_REJECTED':
      return { ...initialState, error: 'Login Failed' };
    default:
      return state;
  }
};
