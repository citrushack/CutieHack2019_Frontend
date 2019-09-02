import React, { Component } from 'react';
import {connect} from 'react-redux';
import { userLoginFetch } from '../redux/actions';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';

class Login extends Component {
  state = {
    email: '',
    password: '',
    redirectToHome: false
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
   event.preventDefault()
   this.props.userLoginFetch(this.state)
   this.setState({
     email: '',
     password: '',
     redirectToHome: true
   })
 }

  render(){
    if (this.state.redirectToHome === true) {
      return <Redirect to={{pathname: '/home'}}/>
    }
    return(
      <div>
        <Navbar />
        <div>
          <form onSubmit={this.handleSubmit}>
            <input name='email' placeholder='email' value={this.state.email} onChange={this.handleChange}/>
            <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleChange}/>
            <input type='submit'/>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);
