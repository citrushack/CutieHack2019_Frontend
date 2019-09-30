import React, { Component } from 'react';
import {connect} from 'react-redux';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Register from './Register';
import { Spin, Icon } from 'antd'
import { Row, Container, Col } from 'react-bootstrap';
import { Animated } from 'react-animated-css';
import { getProfileFetch } from '../redux/actions';
import "./css/Profile.css";

const cutieIcon = require('./assets/Icon.png');
const antIcon = <Icon type="loading" className="spinner" spin />;

class Profile extends Component {
  state = {
    state: '',
    email: '',
    name: '',
    school: '',
    levelOfStudy: '',
    major: '',
    graduationYear: '',
    dob: '',
    ethnicity: '',
    phoneNumber: '',
    dietaryRestrictions: '',
    shirtSize: '',
    linkedIn: '',
    gitHub: '',
    resume: '',
    loaded: false
  }

  HomeRedirect = () => {
    window.location.assign('/')
  }

  getProfile = () => {
      const token = localStorage.token;
      fetch("http://0573a6fc.ngrok.io/api/validateToken", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
      .then(resp => resp.json()
      .then(resp => {
        console.log(resp)
        this.setState({
          status: resp.user.profile.applicationStatus,
          email: resp.user.profile.email,
          name: resp.user.profile.firstName,
          school: resp.user.profile.school,
          levelOfStudy: resp.user.profile.levelOfStudy,
          graduationYear: resp.user.profile.graduationYear,
          major: resp.user.profile.major,
          gender: resp.user.profile.gender,
          dob: resp.user.profile.dateOfBirth,
          ethnicity: resp.user.profile.ethnicity,
          phoneNumber: resp.user.profile.phoneNumber,
          dietaryRestrictions: resp.user.profile.dietaryRestrictions,
          linkedIn: resp.user.profile.linkedin,
          github: resp.user.profile.github,
          resume: resp.user.profile.resume,
          loaded: true
        })
      })
      )
      .catch(err => console.log(err))
  }

  componentDidMount () {
    this.getProfile()
  }

  loader = () => {
    return (
      <div>
        <div className="alignMiddle">
          {antIcon}
        </div>
      </div>
    )
  }

  content = () => {
    return (
      <div>
        <Animated animationIn="fadeIn" isVisible={true}>
          <div style={{paddingLeft: '10px'}}>
            <button className="profileHomebutton buttons" onClick={this.HomeRedirect}>HOME</button>
          </div>
          <div className="hamburger"> <Hamburger /> </div>
          <div className="profileContainer">
            <div className = "imgNameEmail">
              <img className="iconProfile "src={cutieIcon}/>
              <div style={{width: '100%'}}>
                <p className="profileHeader">{this.state.name}</p>
                <p className="profileSubHeader"> Email: {this.state.email}</p>
              </div>
            </div>
            <div className="innerProfileContainer">
              <div style={{textAlign: 'center'}}className="innerHeaderProfile">
                <h1 className="innerHeaderProfile">APPLICATION STATUS: {this.state.status}</h1>
              </div>
              <div className = "academicSchool">
                <h1 className="sub1Header">ACADEMIC</h1>
                <h1 className="sub2Header">School:</h1>
                <h1 className="sub3Header">{this.state.school}</h1>
              </div>
              <div className="academicSubfield" >
                <h1 className="sub2HeaderLower">Level of Study:</h1>
                <h1 className="sub3Header">{this.state.levelOfStudy}</h1>
              </div>
              <div className="academicSubfield" >
                <h1 className="sub2HeaderLower">Graduation Year:</h1>
                <h1 className="sub3Header">{this.state.graduationYear}</h1>
              </div>
              <div className="academicSubfield">
                <h1 className="sub2HeaderLower">Major:</h1>
                <h1 className="sub3Header">{this.state.major}</h1>
              </div>
              <div className="demographicHeader" >
                <h1 className="sub1Header">DEMOGRAPHIC</h1>
                <h1 className="sub2Header">Gender:</h1>
                <h1 className="sub3Header">{this.state.gender}</h1>
              </div>
              <div className="demographicSubfield" >
                <h1 className="sub2HeaderLower">Date of Birth:</h1>
                <h1 className="sub3Header">{this.state.dob}</h1>
              </div>
              <div className="demographicSubfield">
                <h1 className="sub2HeaderLower">Ethnicity:</h1>
                <h1 className="sub3Header">{this.state.ethnicity}</h1>
              </div>
              <div className="demographicSubfield">
                <h1 className="sub2HeaderLower">Phone Number:</h1>
                <h1 className="sub3Header">{this.state.phoneNumber}</h1>
              </div>
              <div className="demographicSubfield" >
                <h1 className="sub2HeaderLower">Dietary Restrictions:</h1>
                <h1 className="sub3Header">{this.state.dietaryRestrictions}</h1>
              </div>
              <div className="profileLinkedin">
                <h1 className="sub1Header">PROFILE</h1>
                <h1 className="sub2Header">LinkedIn:</h1>
                <h1 className="sub3Header">{this.state.linkedIn}</h1>
              </div>
              <div className="linkedinSubfield">
                <h1 className="sub2HeaderLower">GitHub:</h1>
                <h1 className="sub3Header">{this.state.gitHub}</h1>
              </div>
              <div className="linkedinSubfield">
                <h1 className="sub2HeaderLower">Resume:</h1>
                <h1 className="sub3Header">{this.state.resume}</h1>
              </div>
            </div>
          </div>
        </Animated>
      </div>
    )
  }

  render(){
    return(
        <div>
          {this.state.loaded ? this.content(): this.loader()}
        </div>
      )
    }
  }

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.profile
  }
}

export default connect(mapStateToProps)(Profile);
