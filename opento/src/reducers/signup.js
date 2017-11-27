const initialState = {
  email: '',
  uid: '',
  picurl: '../images/profilepic.png',
  username: '',
  firstname: '',
  lastname: '',
  password: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'EMAIL_INPUT':
      return { ...state, email: action.payload };
    case 'PW_INPUT':
      return { ...state, password: action.payload };
    case 'FIRST_INPUT':
      return { ...state, firstname: action.payload };
    case 'LAST_INPUT':
      return { ...state, lastname: action.payload };
    case 'USERNAME_INPUT':
      return { ...state, username: action.payload };
    case 'POSTDB_FULFILLED':
    console.log("action payload", action.payload)
        return state
    case 'POSTDB_REJECTED':
      console.log("defp", action.payload)
    case 'SIGNUP_FULFILLED':
      return { ...state,
        email: action.payload.email,
        uid: action.payload.uid
        };
    case 'SIGNUP_REJECTED':
      return { ...initialState, error: 'Login Failed' };
    default:
      return state;
  }
};
