import React, { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import './css/Home.css';

const Hero = require('./assets/hero.png');

class Home extends Component {
  state = {
    auth: true
  }

  render(){
    return(
      <div className="heroStyling">
        <Navbar />
        <div>
          <div style={{textAlign: 'center', float: 'left'}}>
            <h1 className="mainTitle">CUTIE HACK</h1>
            <h2 className="mainSubTitle">November 9, 2019</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
