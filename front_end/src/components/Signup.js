import React, { Component } from 'react';
import {connect} from 'react-redux';
import { userPostFetch } from '../redux/actions';


class Signup extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
   event.preventDefault()
   this.props.userPostFetch(this.state)
 }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input name='email' placeholder='email' value={this.state.email} onChange={this.handleChange}/>
        <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleChange}/>
        <input type='submit'/>
      </form>

    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);
