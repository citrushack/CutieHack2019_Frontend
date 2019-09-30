import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import { Toast } from 'react-bootstrap';
import { Spin, Input, Icon, Button } from 'antd';

const antIcon = <Icon type="loading" className="pwdSpinner" spin />;

class PasswordReset extends Component{
  constructor(props){
    super(props)
    this.state = {
      password: '',
      show: false,
      loading: false
    }
  }

  handleSubmit = () => {
    this.setState({
      loading: true
    })
    fetch("http://c1078b2b.ngrok.io/api/passwordReset", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.props.match.params.token
      },
      body: JSON.stringify({
        "password": this.state.password,
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp.user)
        this.setState({
          show: true,
          loading: false
        })
      })
      .catch(err => console.log(err))
  }

  loader = () => {
    return (
      <div style={{textAlign: 'center', paddingTop: '1%'}}>
        {antIcon}
      </div>
    )
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    console.log(this.props.match.params.token)
    return(
      <div>
        <div style={{paddingLeft: '10px'}}>
          <button className="buttons" onClick={this.HomeRedirect}>HOME</button>
        </div>
        <Animated animationIn="fadeIn" isVisible={true}>
          <div style={{display: 'flex'}}>
            <div className="fPwdForm">
              <div style={{display: 'flex'}}>
                <div className="topText">Change Password</div>
                {this.state.loading ? this.loader(): null}
              </div>
              <div style={{marginTop: '4%'}} className="inputFields">
                <input className="customInput" type="text" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
              </div>
              <div className="ForgotPwdBorder"></div>
              <div className="submitField">
                <Button onClick={this.handleSubmit} className="submitButton">RESET PASSWORD</Button>
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

export default PasswordReset;
