import firebase from 'firebase';
import axios from 'axios'

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

export const firstName = (fn) => {
  return {
    type: 'FIRST_INPUT',
    payload: fn
  };
};

export const lastName = (ln) => {
  return {
    type: 'LAST_INPUT',
    payload: ln
  };
};

export const username = (username) => {
  return {
    type: 'USERNAME_INPUT',
    payload: username
  };
};

export const postDB = (info) => {
  console.log(info);
  return {
    type: 'POSTDB',
    payload: axios.post(`http://localhost:3000/users/`, JSON.stringify(info))
    .catch((error) => {
      console.log(error);
    })
  };
}

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
      .catch((error) => {
        console.log(error);
      })
  };
};
