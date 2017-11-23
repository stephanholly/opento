import firebase from 'firebase';

export const emailInput = (email) => {
  return {
    type: 'EMAIL_INPUT',
    payload: email
  };
};

export const pwInput = (pw) => {
  return {
    type: 'PW_INPUT',
    payload: pw
  };
};

export const signup = (email, pw) => {
  return {
    type: 'SIGNUP',
    payload: firebase.auth()
      .createUserWithEmailAndPassword(email, pw)
      .then((user) => {
        console.log('auth', user);
        return {
          email: user.email,
          uid: user.uid
        };
      })
      .catch(() => {
        nav.navigate('SignupFail');
      })
  };
};
