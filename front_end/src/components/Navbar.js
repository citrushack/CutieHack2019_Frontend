import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './css/Navbar.css';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      Authenticated: true,
      redirectToLogin: false,
      redirectToHome: false,
    }
  }

  LoginRedirect = () => {
    this.setState({
      redirectToLogin: true
    })
  }

  HomeRedirect = () => {
    this.setState({
      redirectToHome: true
    })
  }

  render(){
    if (this.state.redirectToLogin) {
      return <Redirect to={{pathname: '/login'}}/>
    }
    else if(this.state.redirectToHome) {
      return <Redirect to={{pathname: '/home'}}/>
    }
    return(
      <div>
        <div className="nav">
          <button className="buttons" onClick={this.HomeRedirect}>HOME</button>
          <button className="buttons">ABOUT</button>
          <button className="buttons">FAQ</button>
          <button className="buttons">SPONSORS</button>
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
