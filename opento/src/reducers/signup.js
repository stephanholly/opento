const initialState = {
  email: '',
  uid: '',
  picUrl: '../images/profilepic.png',
  username: '',
  firstName: '',
  lastName: '',
  password: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'EMAIL_INPUT':
      return { ...state, email: action.payload };
    case 'PW_INPUT':
      return { ...state, password: action.payload };
    case 'FIRST_INPUT':
      return { ...state, firstName: action.payload };
    case 'LAST_INPUT':
      return { ...state, lastName: action.payload };
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
