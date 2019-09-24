import React, { Component } from 'react';
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

  render(){
    return(
      <div>
        <div>
          <button className="buttons" onClick={this.HomeRedirect}>HOME</button>
          <button className="buttons" onClick={this.LoginRedirect}>LOGIN</button>
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
          <Container fluid className="noPadding">
            <div style={{textAlign: 'center'}}className="innerHeaderProfile">
              <h1 className="innerHeaderProfile">APPLICATION STATUS: ACCEPTED</h1>
            </div>
            <Row className="noMargin">
              <Col className="noPadding">
                <div className="profileSection">School</div>
                <div className="profileSection2">Level of Study</div>
                <div className="profileSection2">Major</div>
                <div className="profileSection2">Graduation year</div>
                <div className="profileSection2">DOB</div>
                <div className="profileSection2">Race</div>
                <div className="profileSection2">Phone Number</div>
                <div className="profileSection2">Shirt Size</div>
                <div className="profileSection2">Linkedin</div>
                <div className="profileSection2">Github</div>
                <div className="profileSection2">Resume</div>
              </Col>
              <Col className="noPadding">
                <div className="profileSectionText">UCR</div>
                <div className="profileSectionText2">UCR</div>
                <div className="profileSectionText2">UCR</div>
                <div className="profileSectionText2">UCR</div>

              </Col>
            </Row>
          </Container>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
