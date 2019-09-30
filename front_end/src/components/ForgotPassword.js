import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import { Spin, Input, Icon, Button } from 'antd';
import { Animated } from 'react-animated-css';
import { Toast } from 'react-bootstrap';
import './css/ForgotPassword.css';

const antIcon = <Icon type="loading" className="pwdSpinner" spin />;

class ForgotPassword extends Component {
  state={
    email: '',
    show: false,
    loading: false
  }

  loader = () => {
    return (
      <div style={{textAlign: 'center', paddingTop: '1%'}}>
        {antIcon}
      </div>
    )
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  HomeRedirect = () => {
    window.location.assign('/')
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }

  handleReset = () => {
    this.setState({
      loading: true
    })
    fetch("http://5742604e.ngrok.io/api/sendResetEmail", {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'email': this.state.email}),
      method: "POST",
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.Status) {
          this.setState({
            email: '',
            show: true,
            loading: false
          })
        }
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
          <div style={{display: 'flex'}}>
            <div className="fPwdForm">
              <div style={{display: 'flex'}}>
                <div className="topText">Forgot Password</div>
                {this.state.loading ? this.loader(): null}
              </div>
              <div style={{marginTop: '4%'}} className="inputFields">
                <input type='text' name="email" value={this.state.email} className="customInput" placeholder="Email" onChange={this.handleChange}/>
              </div>
              <div className="ForgotPwdBorder"></div>
              <div className="submitField">
                <Button onClick={this.handleReset} className="submitButton">RESET PASSWORD</Button>
              </div>
            </div>
          </div>
        </Animated>
        <div className="toastStylingPwd">
          <Toast show={this.state.show} onClose={this.toggleShow}>
            <Toast.Header>
              <strong style={{color: '#42CAC0'}} className="mr-auto">Success</strong>
            </Toast.Header>
            <Toast.Body style={{color: '#42CAC0'}}>A reset link has been sent to your email!</Toast.Body>
          </Toast>
        </div>
      </div>
    )
  }
}

export default ForgotPassword;
