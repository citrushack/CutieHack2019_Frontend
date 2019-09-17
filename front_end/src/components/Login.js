import React, { Component } from 'react';
import {connect} from 'react-redux';
import { userLoginFetch } from '../redux/actions';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import { Input, Icon } from 'antd';
import './css/Login.css';
import { Animated } from 'react-animated-css';

class Login extends Component {
  state = {
    email: '',
    password: '',
    redirectToHome: false,
    redirectToRegister: false,
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
   event.preventDefault()
   this.props.userLoginFetch(this.state)
   this.setState({
     email: '',
     password: '',
   })
   // window.location.assign('/')
  }

  handleRegister = () => {
     this.setState({
       redirectToRegister: true
     })
  }

  handleReset = () => {
    fetch("http://c1078b2b.ngrok.io/api/sendResetEmail", {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'email': 'jshin029@ucr.edu'}),
      method: "POST",
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.message) {
          console.log(resp.message)
        }
      })
      .catch(err => console.log(err))
  }

  render(){
    if (this.state.redirectToRegister) {
      return <Redirect push to="/register" />
    }
    console.log(this.state.email)

    return(
      <div className="login">
        <Navbar loginCheck={this.props.redirectToLogin}/>
        <Animated animationIn="fadeIn" isVisible={true}>
          <div className="loginForm">
            <div className="topText">Log in</div>
            <div style={{marginTop: '4%'}}className="inputFields">
              <input type='text' name="email" value={this.state.email} className="customInput" placeholder="Email" onChange={this.handleChange}/>
            </div>
            <div style={{marginTop: '6%'}}className="inputFields">
              <input type='password' name="password" value={this.state.password} className="customInput" placeholder="Password" onChange={this.handleChange}/>
            </div>
            <div className="loginBorder"></div>
            <div className="submitField">
              <button onClick={this.handleSubmit} className="submitButton">LOGIN</button>
            </div>
            <div className="submitField">
              <button onClick={this.handleRegister}className="submitButton">SIGN UP</button>
            </div>
            <div onClick={this.handleReset} style={{color: 'white', width: '100%', marginTop: '6%', textAlign: 'center'}}>FORGOT PASSWORD?</div>
          </div>
        </Animated>

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo)),

})

export default connect(null, mapDispatchToProps)(Login);
