import React, { Component } from 'react';
import {connect} from 'react-redux';
import Navbar from './Navbar';
import Register from './Register';
import { Row, Container, Col } from 'react-bootstrap';
import "./css/Profile.css";
const cutieIcon = require('./assets/Icon.png');

class Profile extends Component {
  state = {
    school: '',
    levelOfStudy: '',
    major: '',
    graduationYear: '',
    dob: '',
    race: '',
    phoneNumber: '',
    shirtSize: '',
    linkedIn: '',
    gitHub: '',
    resume: ''
  }

  HomeRedirect = () => {
    window.location.assign('/')
  }

  render(){

    return(
      <div>
        <div>
          <button className="buttons" onClick={this.HomeRedirect}>HOME</button>
        </div>
        <div className="profileContainer">
          <div style={{display: 'flex', paddingLeft: '4%'}}>
            <img className="iconProfile "src={cutieIcon}/>
            <div style={{width: '100%'}}>
              <p className="profileHeader">John</p>
              <p className="profileSubHeader"> Email: jshin029@ucr.edu</p>
            </div>
          </div>
          <div className="innerProfileContainer">
            <div style={{textAlign: 'center'}}className="innerHeaderProfile">
              <h1 className="innerHeaderProfile">APPLICATION STATUS: ACCEPTED</h1>
            </div>
            <div style={{display: 'flex'}}>
              <h1 className="sub1Header">ACADEMIC</h1>
              <h1 className="sub2Header">School:</h1>
              <h1 className="sub3Header">University of California, Riverside</h1>
            </div>
            <div style={{display: 'flex', paddingTop: '20px'}}>
              <h1 className="sub2HeaderLower">Level of Study:</h1>
              <h1 className="sub3Header">Senior</h1>
            </div>
            <div style={{display: 'flex', paddingTop: '20px'}}>
              <h1 className="sub2HeaderLower">Graduation Year:</h1>
              <h1 className="sub3Header">2020</h1>
            </div>
            <div style={{display: 'flex', paddingTop: '20px'}}>
              <h1 className="sub2HeaderLower">Major:</h1>
              <h1 className="sub3Header">Computer Science</h1>
            </div>
            <div style={{display: 'flex', marginTop: '25px'}}>
              <h1 className="sub1Header">DEMOGRAPHIC</h1>
              <h1 className="sub2Header">Gender:</h1>
              <h1 className="sub3Header">Male</h1>
            </div>
            <div style={{display: 'flex', paddingTop: '20px'}}>
              <h1 className="sub2HeaderLower">Date of Birth:</h1>
              <h1 className="sub3Header">Senior</h1>
            </div>
            <div style={{display: 'flex', paddingTop: '20px'}}>
              <h1 className="sub2HeaderLower">Ethnicity:</h1>
              <h1 className="sub3Header">Asian American</h1>
            </div>
            <div style={{display: 'flex', paddingTop: '20px'}}>
              <h1 className="sub2HeaderLower">Phone Number:</h1>
              <h1 className="sub3Header">909-606-2233</h1>
            </div>
            <div style={{display: 'flex', paddingTop: '20px'}}>
              <h1 className="sub2HeaderLower">Dietary Restrictions:</h1>
              <h1 className="sub3Header">None</h1>
            </div>
            <div style={{display: 'flex', marginTop: '25px'}}>
              <h1 className="sub1Header">PROFILE</h1>
              <h1 className="sub2Header">LinkedIn:</h1>
              <h1 className="sub3Header"></h1>
            </div>
            <div style={{display: 'flex', paddingTop: '20px'}}>
              <h1 className="sub2HeaderLower">GitHub:</h1>
              <h1 className="sub3Header"></h1>
            </div>
            <div style={{display: 'flex', paddingTop: '20px'}}>
              <h1 className="sub2HeaderLower">Personal:</h1>
              <h1 className="sub3Header"></h1>
            </div>
            <div style={{display: 'flex', paddingTop: '20px'}}>
              <h1 className="sub2HeaderLower">Resume:</h1>
              <h1 className="sub3Header"></h1>
            </div>
          </div>
        </div>
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
