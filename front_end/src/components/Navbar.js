import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './css/Navbar.css';

const Icon = require('./assets/icon.png');

const noScroll = {
}

const yesScroll = {
  backgroundColor: '#2E3E4F'
}

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      Authenticated: true,
      redirectToLogin: false,
      redirectToHome: false,
      isTop: true
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 40;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll = (isTop) => {
    this.setState({ isTop });
  }

  LoginRedirect = () => {
    window.location.assign('/login')
  }

  HomeRedirect = () => {
    window.location.assign('/')
  }

  render(){
    let nav;
    if (this.state.isTop){
      nav = noScroll
    }
    else {
      nav = yesScroll
    }

    return(
      <div>
         <div className="nav" style={nav}>
           <button style={nav} className="buttons" onClick={this.HomeRedirect}>HOME</button>
           <a className="buttons" href='#section2'>ABOUT</a>
           <a className="buttons" href='#section3'>FAQs</a>
           <a className="buttons" href='#section4'>SPONSORS</a>
           <button className="buttons">CONTACT</button>
           {this.state.Authenticated ? (
             <button className="buttons" onClick={this.LoginRedirect}>LOGIN</button>
           ):(
             <button className="buttons">LOGOUT</button>
           )}
         </div>
      </div>
    )
  }
}

export default Navbar;
