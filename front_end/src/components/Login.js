import React, { Component } from 'react';
import {connect} from 'react-redux';
import { userLoginFetch } from '../redux/actions';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import { Input, Icon } from 'antd';
import './css/Login.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
    redirectToHome: false
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
   window.location.assign('/')
 }

  render(){

    return(
      <div>
        <Navbar loginCheck={this.props.redirectToLogin}/>
        <div className="loginForm">
            <div style={{marginTop: '8%'}}className="inputFields">
              <div className="loginText">EMAIL</div>
              <input style={{width: '100%'}} placeholder="Email" />
            </div>
            <div style={{marginTop: '6%'}}className="inputFields">
              <div className="loginText">PASSWORD</div>
              <input style={{width: '100%'}} placeholder="Password" />
            </div>
            <div className="loginBorder"></div>
            <div className="submitField">
              <button className="submitButton">LOGIN</button>
            </div>
            <div className="submitField">
              <button className="submitButton">SIGN UP</button>
            </div>
            <div style={{color: 'white', width: '100%', marginTop: '6%', textAlign: 'center'}}>FORGOT PASSWORD?</div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);
