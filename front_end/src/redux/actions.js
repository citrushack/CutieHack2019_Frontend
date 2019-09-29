import { Redirect } from 'react-router-dom';
import React from 'react';

export const userPostFetch = (user) => {
  console.log(user)
  return dispatch => {
    return fetch("http://16026b4e.ngrok.io/api/apply", {
      headers: {
        'Content-Type': 'application/json',
      },
      method: "POST",
      body: JSON.stringify({
        "email": user.email,
        "password": user.password1,
        "profile":{
            "first_name": user.first_name,
            "last_name": user.last_name,
            "school": user.school,
            "level_of_study": user.level_of_study,
            "graduation_year": user.graduation_year,
            "major": user.major,
            "gender": user.gender,
            "date_of_birth": user.date_of_birth,
            "ethnicity": user.ethnicity,
            "phone_number": user.phone_number,
            "dietary_restrictions": user.dietary_restrictions,
            "linkedin": user.linkedin,
            "github": user.github,
            "resume": user.resume,
            "conduct_box": user.conduct_box,
            "share_box": user.share_box
        }
      }),
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.message) {
          console.log(resp)
        }
        else {
          console.log(resp)
        }
      })
      .catch(err => console.log(err))
  }
}

export const userLoginFetch = (user) => {
  return dispatch => {
    return fetch("http://0573a6fc.ngrok.io/api/login", {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user}),
      method: "POST",
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.message) {
          console.log(resp.message)
        }
        else {
          localStorage.setItem("token", resp.jwt)
          dispatch(loginUser(resp.user))
        }
      })
  }
}

export const getProfileFetch = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://0573a6fc.ngrok.io/api/validateToken", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      })
        .then(resp => resp.json())
        .then(resp => {
          if (resp.message) {
            // An error will occur if the token is invalid.
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

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})
