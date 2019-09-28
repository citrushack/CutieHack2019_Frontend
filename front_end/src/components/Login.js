import React, { Component } from 'react';
import {connect} from 'react-redux';
import { userLoginFetch } from '../redux/actions';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import { Input, Icon, Button } from 'antd';
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
   .then(resp => {
     this.setState({
       email: '',
       password: '',
       redirectToHome: true
     })
   })
   .catch(err => console.log(err))
  }

  handleRegister = () => {
     this.setState({
       redirectToRegister: true
     })
  }

  handleReset = () => {
    fetch("http://2902b774.ngrok.io/api/sendResetEmail", {
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
  HomeRedirect = () => {
    window.location.assign('/')
  }
  render(){
    if (this.state.redirectToRegister) {
      return <Redirect push to= "/register" />
    }
    if (this.state.redirectToHome) {
      return <Redirect push to = "/" />
    }
    return(
      <div className="login">
         <div className="loginNav"style={{paddingLeft: '10px'}}>
          <button className="buttons" onClick={this.HomeRedirect}>HOME</button>
        </div>
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
              <Button onClick={this.handleSubmit} className="submitButton">LOGIN</Button>
            </div>
            <div className="submitField">
              <Button onClick={this.handleRegister} className="submitButton">SIGN UP</Button>
            </div>
            <Button onClick={this.handleReset} className="resetText">FORGOT PASSWORD?</Button>
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
