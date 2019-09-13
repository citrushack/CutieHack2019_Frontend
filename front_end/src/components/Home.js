import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
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
              <div style={{marginLeft: '15px', marginTop: '6px', borderBottom: '1px solid white'}}></div>
            <h2 className="mainSubTitle">November 9, 2019</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
