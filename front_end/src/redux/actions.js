import { Redirect } from 'react-router-dom';
import React from 'react';

export const userPostFetch = (user) => {
  return dispatch => {
    return fetch("http://localhost:5000/signup", {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user}),
      method: "POST",
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.message) {
        } else {
          localStorage.setItem("token", resp.jwt)
          dispatch(loginUser(resp.user))
        }
      })
      .catch(err => console.log(err))
  }
}

export const userLoginFetch = (user) => {
  return dispatch => {
    return fetch("http://localhost:5000/cutielogin", {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user}),
      method: "POST",
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.message) {
        } else {
          localStorage.setItem("token", resp.jwt)
          dispatch(loginUser(resp.user))
          return <Redirect to={{pathname: '/home'}} />
        }
      })
      .catch(err => console.log(err))
  }
}

export const getProfileFetch = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:5000/cutietest", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(resp => {
          if (resp.message) {
            // An error will occur if the token is invalid.
            // If this happens, you may want to remove the invalid token.
            localStorage.removeItem("token")
          } else {
            dispatch(loginUser(resp.user))
          }
        })
        .catch(err => console.log(err))
    }
  }
}

const loginUser = (userObj) => ({
    type: 'LOGIN_USER',
    payload: userObj
})
