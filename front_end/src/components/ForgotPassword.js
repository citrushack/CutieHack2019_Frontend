import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import { Input, Icon, Button } from 'antd';
import { Animated } from 'react-animated-css';
import './css/ForgotPassword.css';

class ForgotPassword extends Component {
  state={
    email: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  HomeRedirect = () => {
    window.location.assign('/')
  }

  handleReset = () => {
    fetch("http://0573a6fc.ngrok.io/api/sendResetEmail", {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'email': this.state.email}),
      method: "POST",
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.message) {
        }
      })
      this.setState({
        email: ''
      })
      .catch(err => console.log(err))
  }

  render(){
    return(
      <div>
        <div style={{paddingLeft: '10px'}}>
          <button className="buttons" onClick={this.HomeRedirect}>HOME</button>
        </div>
        <Animated animationIn="fadeIn" isVisible={true}>
          <div className="fPwdForm">
            <div className="topText">Forgot Password</div>
            <div style={{marginTop: '4%'}} className="inputFields">
              <input type='text' name="email" value={this.state.email} className="customInput" placeholder="Email" onChange={this.handleChange}/>
            </div>
            <div className="ForgotPwdBorder"></div>
            <div className="submitField">
              <Button onClick={this.handleReset} className="submitButton">RESET PASSWORD</Button>
            </div>
          </div>
        </Animated>
      </div>
    )
  }
}

export default ForgotPassword;
