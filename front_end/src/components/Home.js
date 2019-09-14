import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import ScrollableAnchor from 'react-scrollable-anchor'
import { connect } from 'react-redux';
import './css/Home.css';

const Hero = require('./assets/hero.png');

class Home extends Component {
  state = {
    auth: true
  }

  render(){
    return(
      <div>
        <div className="heroStyling">
          <Navbar />
            <div style={{textAlign: 'center', float: 'left'}}>
                <h1 className="mainTitle">CUTIE HACK</h1>
                <div style={{width: '70%', margin: 'auto', marginBottom: '16px', borderBottom: '1px solid white'}}></div>
              <h2 className="mainSubTitle">November 9, 2019</h2>
            </div>
        </div>
        <ScrollableAnchor id={'section2'}>
          <div className="section2">
            <div className="s1">
            </div>
            <div className="s2">
              <h1 className="paragraphTitle">About Cutie Hack</h1>
              <p className="paragraText">Cutie Hack is a beginner-friendly, 12-hour hackathon. Hosted at UC Riverside, Cutie Hack is designed to help new hackers get used to the time crunch of a hackathon environment. <br></br> <br></br>Cutie Hack invites collegiate students to UC Riverside to collaborate and innovate. Throughout the 12 hours, participants work in teams on a project, attend workshops to learn about new technologies, and network with industry partners.</p>
            </div>
          </div>
        </ScrollableAnchor>
      </div>
    )
  }
}

export default Home;
