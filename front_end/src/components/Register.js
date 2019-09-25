import React, { Component, useState } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { userPostFetch } from '../redux/actions';
import { Row, Container, Col } from 'react-bootstrap';
import { Animated } from 'react-animated-css';
import { Button, Icon, Input, Checkbox } from 'antd'
import { Toast } from 'react-bootstrap';
import './css/Register.css'

const cutieIcon = require('./assets/Icon.png');

class Registeration extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password1: '',
      password2: '',
      first_name: '',
      last_name: '',
      school: '',
      level_of_study: '',
      graduation_year: '',
      major: '',
      gender: '',
      gender_other: '',
      date_of_birth: '',
      race: '',
      race_other: '',
      phone_number: '',
      shirt_size: '',
      dietary_restrictions: '',
      linkedin: '',
      github: '',
      resume: '',
      conduct_box: false,
      share_box: false,
      show: false
    }
  }

  validateForms = () => {
    let temp1 = this.state.password1;
    let temp2 = this.state.password2;
    let pwdError, firstNameError, lastNameError, conductError, emailError = false;
    let formValidation = true;
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (temp1.length === temp2.length){
      for (let i = 0; i < temp1.length; ++i){
        if (temp1[i] != temp2[i]){
          pwdError = true;
          formValidation = false;
        }
      }
    }
    else {
      pwdError = true;
      formValidation = false;
    }
    if (this.state.first_name.length <= 0){
      firstNameError = true;
      formValidation = false;
    }
    if (this.state.last_name.length <= 0){
      lastNameError = true;
      formValidation = false;
    }
    if (this.state.conduct_box === false){
      conductError = true;
      formValidation = false;
    }
    if (re.test(this.state.email) === false){
      emailError = true;
      formValidation = false;
    }
    if (formValidation){
      this.props.userPostFetch(this.state)
    }
    else {
      this.setState(prevState => ({
        show: !prevState.show
      }));
    }
  }

  LoginRedirect = () => {
    window.location.assign('/login')
  }

  HomeRedirect = () => {
    window.location.assign('/')
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleShare = () => {
    this.setState(prevState => ({
      share_box: !prevState.share_box
    }))
  }

  handleConduct = () => {
    this.setState(prevState => ({
      conduct_box: !prevState.conduct_box
    }));
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateForms();
  }

  render(){
    console.log(this.state.conduct_box)
    return(
        <div className="registerParent">
        <div>
          <button className="buttons" onClick={this.HomeRedirect}>HOME</button>
          <button className="buttons" onClick={this.LoginRedirect}>LOGIN</button>
        </div>
        <Animated animationIn="fadeIn" isVisible={true}>
          <form className="formContainer" onSubmit={this.handleSubmit}>
            <img className="cutieIcon" src={cutieIcon}></img>
            <div className="outerParent">
            <div style={{marginLeft: '4%', paddingTop: '4%', marginBottom: '0'}}>
              <h1 className="registrationTitle">Cutie Hack Registration</h1>
            </div>
              <div className="formFlex">
                <div className="firstInner">
                  <p className="formText">EMAIL *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" onChange={this.handleChange} placeholder="Email" prefix={<Icon type="mail" style={{color: 'rgba(255,255,255)'}} />}/>
                  </div>
                </div>
                <div className="firstInner">
                  <p className="formText">PASSWORD *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" onChange={this.handleChange} placeholder="Password" prefix={<Icon type="lock" style={{color: 'rgba(255,255,255)'}} />}/>
                  </div>
                </div>
                <div className="firstInner">
                  <p className="formText">PASSWORD2 *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" onChange={this.handleChange} placeholder="Repeat Password" prefix={<Icon type="lock" style={{color: 'rgba(255,255,255)'}} />}/>
                  </div>
                </div>
              </div>
              <div className="formFlex">
                <div className="secondInner">
                  <p className="formText">FIRST NAME *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" onChange={this.handleChange} placeholder="First name" prefix={<Icon type="user" style={{color: 'rgba(255,255,255)'}} />}/>
                  </div>
                </div>
                <div className="secondInner">
                  <p className="formText">LAST NAME *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" onChange={this.handleChange} placeholder="Last name" prefix={<Icon type="user" style={{color: 'rgba(255,255,255)'}} />}/>
                  </div>
                </div>
              </div>
              <div className="formFlex">
                <div className="secondInner">
                  <p className="formText">SCHOOL *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" onChange={this.handleChange} placeholder="School" prefix={<Icon type="sort-ascending" style={{color: 'rgba(255,255,255)'}} />}/>
                  </div>
                </div>
                <div className="secondInner">
                  <p className="formText">LEVEL OF STUDY *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" onChange={this.handleChange} placeholder="Level of study" prefix={<Icon type="user" style={{color: 'rgba(255,255,255)'}} />}/>
                  </div>
                </div>
              </div>
              <div className="formFlex">
                <div className="secondInner">
                  <p className="formText">GRADUATION YEAR *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" onChange={this.handleChange} placeholder="Graduation year" prefix={<Icon type="user" style={{color: 'rgba(255,255,255)'}} />}/>
                  </div>
                </div>
                <div className="secondInner">
                  <p className="formText">MAJOR *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" onChange={this.handleChange} placeholder="Major" prefix={<Icon type="idcard" style={{color: 'rgba(255,255,255)'}} />}/>
                  </div>
                </div>
              </div>
              <div className="formFlex">
                <div className="secondInner">
                  <p className="formText">GENDER *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" onChange={this.handleChange} placeholder="Gender" prefix={<Icon type="team" style={{color: 'rgba(255,255,255)'}} />}/>
                  </div>
                </div>
                <div className="secondInner">
                  <p className="formText">GENDER OTHER *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" onChange={this.handleChange} placeholder="Gender other"  prefix={<Icon type="team" style={{color: 'rgba(255,255,255)'}} />}/>
                  </div>
                </div>
              </div>
              <div className="formFlex">
                <div className="secondInner">
                  <p className="formText">DATE OF BIRTH *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" onChange={this.handleChange} placeholder="Date of Birth" prefix={<Icon type="calendar" style={{color: 'rgba(255,255,255)' }} />}/>
                  </div>
                </div>
                <div className="secondInner">
                  <p className="formText">RACE *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" onChange={this.handleChange} placeholder="Race" prefix={<Icon type="user" style={{color: 'rgba(255,255,255)' }} />}/>
                  </div>
                </div>
              </div>
              <div className="formFlex">
                <div className="secondInner">
                  <p className="formText">LINKEDIN</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" onChange={this.handleChange} placeholder="LinkedIn" prefix={<Icon type="linkedin" style={{color: 'rgba(255,255,255)' }} />}/>
                  </div>
                </div>
                <div className="secondInner">
                  <p className="formText">GITHUB</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" onChange={this.handleChange} placeholder="Github" prefix={<Icon type="github" style={{color: 'rgba(255,255,255)' }} />}/>
                  </div>
                </div>
                <div className="secondInner">
                  <p className="formText">LINK TO RESUME</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" onChange={this.handleChange} placeholder="Link to resume" prefix={<Icon type="paper-clip" style={{color: 'rgba(255,255,255)' }} />}/>
                  </div>
                </div>
              </div>
              <div className="formFlex">
                <div className="checkInner">
                  <div style={{display: 'flex'}}>
                    <Checkbox style={{marginTop: '10px', paddingLeft: '5px'}} check={this.state.share_box} onChange={this.handleChange}></Checkbox>
                    <p className="checkText">I authorize you to share my application/registration information for event adminstration, ranking, MLH adminstration, pre- and post-event informational e-mails, and occasional messages about hackathons in-line with the MLH Privacy Policy.</p>
                  </div>
                </div>
              </div>
              <div className="formFlex">
                <div className="secondInner">
                  <p className="formText">PHONE NUMBER *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" placeholder="Phone Number" prefix={<Icon type="phone" style={{color: 'rgba(255,255,255)' }} />}/>
                  </div>
                </div>
                <div className="secondInner">
                  <p className="formText">SHIRT SIZE *</p>
                  <div style={{width: '90%'}}>
                    <Input className="antInputStyling" placeholder="Shirt Size" prefix={<Icon type="skin" style={{color: 'rgba(255,255,255)' }} />}/>
                  </div>
                </div>
              </div>
              <div className="formFlex">
                <div className="checkInner">
                  <div style={{display: 'flex'}}>
                    <Checkbox style={{paddingLeft: '5px'}} onChange={this.handleConduct}></Checkbox>
                    <p className="checkText">By checking the following box, you agree to follow all rules and regulations outlined in the offical MLH code of conduct</p>
                  </div>
                </div>
              </div>
              <div className="formFlex">
                <div className="submitInner">
                  <div className="toastStyling">
                    <Toast show={this.state.show} onClose={this.toggleShow}>
                      <Toast.Header>
                        <strong style={{color: '#F6796E'}} className="mr-auto">Error</strong>
                      </Toast.Header>
                      <Toast.Body style={{color: '#F6796E'}}>One or more of the fields are empty or incorrect!</Toast.Body>
                    </Toast>
                  </div>
                  <div className="buttonStyling">
                    <button onClick={this.handleSubmit}className="applyButton">APPLY</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Animated>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Registeration);
