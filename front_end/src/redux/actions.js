import { Redirect } from 'react-router-dom';
import React from 'react';

export const userPostFetch = (user) => {
  return dispatch => {
    return fetch("http://85318eb5.ngrok.io/apply/", {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email": user.email,
        "password": user.password,
        "profile":{
            "first_name": user.first_name,
            "last_name": user.last_name,
            "school": user.school,
            "level_of_study": user.level_of_study,
            "graduation_year": user.graduation_year,
            "major": user.major,
            "gender": user.gender,
            "gender_other": user.gender_other,
            "date_of_birth": user.date_of_birth,
            "race": user.race,
            "race_other": user.race_other,
            "phone_number": user.phone_number,
            "shirt_size": user.shirt_size,
            "dietary_restrictions": user.dietary_restrictions,
            "linkedin": "",
            "github":"",
            "resume":"",
            "conduct_box":"True",
            "share_box":"True"
        }
      }),
      method: "POST",
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.message) {
        } else {
          console.log(resp)
          // localStorage.setItem("token", resp.jwt)
          // dispatch(loginUser(resp.user))
        }
      })
      .catch(err => console.log(err))
  }
}

export const userLoginFetch = (user) => {
  return dispatch => {
    return fetch("http://85318eb5.ngrok.io/api/login", {
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
          console.log(resp.jwt)
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
      return fetch("http://85318eb5.ngrok.io/api/validateToken", {
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
            // If this happens, you may want to remove the invalid token.
            localStorage.removeItem("token")
          } else {
            console.log(resp)
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
