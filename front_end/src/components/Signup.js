import React, { Component } from 'react';
import {connect} from 'react-redux';
import { userPostFetch } from '../redux/actions';


class Signup extends Component {
  state = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    school: '',
    level_of_study: '',
    graduation_year: '',
    major: '',
    gender: '',
    gender_other: '',
    date_of_birth: '',
    race: '',
    race_other: '',
    phone_number: '',
    shirt_size: '',
    dietary_restrictions: '',
    linkedin: '',
    github: '',
    resume: '',
    conduct_box: true,
    share_box: true
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
        <input name='first_name' placeholder='first_name' value={this.state.first_name} onChange={this.handleChange}/>
        <input name='last_name' placeholder='last_name' value={this.state.last_name} onChange={this.handleChange}/>
        <input name='school' placeholder='school' value={this.state.school} onChange={this.handleChange}/>
        <input name='level_of_study' placeholder='level_of_study' value={this.state.level_of_study} onChange={this.handleChange}/>
        <input name='graduation_year' placeholder='graduation_year' value={this.state.graduation_year} onChange={this.handleChange}/>
        <input name='major' placeholder='major' value={this.state.major} onChange={this.handleChange}/>
        <input name='gender' placeholder='gender' value={this.state.gender} onChange={this.handleChange}/>
        <input name='gender_other' placeholder='gender_other' value={this.state.gender_other} onChange={this.handleChange}/>
        <input name='date_of_birth' placeholder='date_of_birth' value={this.state.date_of_birth} onChange={this.handleChange}/>
        <input name='race' placeholder='race' value={this.state.race} onChange={this.handleChange}/>
        <input name='race_other' placeholder='race_other' value={this.state.race_other} onChange={this.handleChange}/>
        <input name='phone_number' placeholder='phone_number' value={this.state.phone_number} onChange={this.handleChange}/>
        <input name='shirt_size' placeholder='shirt_size' value={this.state.shirt_size} onChange={this.handleChange}/>
        <input name='dietary_restrictions' placeholder='dietary_restrictions' value={this.state.dietary_restrictions} onChange={this.handleChange}/>
        <input name='linkedin' placeholder='linkedin' value={this.state.linkedin} onChange={this.handleChange}/>
        <input name='github' placeholder='github' value={this.state.github} onChange={this.handleChange}/>
        <input name='resume' placeholder='resume' value={this.state.resume} onChange={this.handleChange}/>
        <input type='submit'/>
      </form>

    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);
