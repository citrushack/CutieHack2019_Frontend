import React, {Component} from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { userPostFetch } from '../redux/actions';
import './css/Register.css'

class Registeration extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password1: '',
      password2: '',
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
      share_box: false
    }
  }

  validateForms = () => {
    let temp1 = this.state.password1;
    let temp2 = this.state.password2;
    let pwdError, firstNameError, lastNameError, conductError, emailError = false;
    let formValidation = true;
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (temp1.length === temp2.length){
      for (let i = 0; i < temp1.length; ++i){
        if (temp1[i] != temp2[i]){
          pwdError = true;
          formValidation = false;
        }
      }
    }
    else {
      pwdError = true;
      formValidation = false;
    }
    if (this.state.first_name.length <= 0){
      firstNameError = true;
      formValidation = false;
    }
    if (this.state.last_name.length <= 0){
      lastNameError = true;
      formValidation = false;
    }
    if (this.state.conduct_box === false){
      conductError = true;
      formValidation = false;
    }
    if (re.test(this.state.email) === false){
      emailError = true;
      formValidation = false;
    }
    if (formValidation){
      this.props.userPostFetch(this.state)
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateForms();
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p className="formText">EMAIL *</p>
          <input className="registerInput" type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
          <p className="formText">PASSWORD1 *</p>
          <input className="registerInput" type="password" name="password1" placeholder="password1" value={this.state.password1} onChange={this.handleChange}/>
          <p className="formText">PASSWORD2 *</p>
          <input className="registerInput" type="password" name="password2" placeholder="password2" value={this.state.password2} onChange={this.handleChange}/>
          <p className="formText">FIRST NAME *</p>
          <input className="registerInput" type="text" name="first_name" placeholder="first name" value={this.state.first_name} onChange={this.handleChange}/>
          <p className="formText">LAST NAME *</p>
          <input className="registerInput" type="text" name="last_name" placeholder="last name" value={this.state.last_name} onChange={this.handleChange}/>
          <p className="formText">SCHOOL *</p>
          <input className="registerInput" type="text" name="school" placeholder="school" value={this.state.school} onChange={this.handleChange}/>
          <input className="registerInput" type="text" name="level_of_study" placeholder="level of study" value={this.state.level_of_study} onChange={this.handleChange}/>
          <input className="registerInput" type="text" name="graduation_year" placeholder="graduation year" value={this.state.graduation_year} onChange={this.handleChange}/>
          <input className="registerInput" type="text" name="major" placeholder="major" value={this.state.major} onChange={this.handleChange}/>
          <input className="registerInput" type="text" name="gender" placeholder="gender" value={this.state.gender} onChange={this.handleChange}/>
          <input className="registerInput" type="text" name="gender_other" placeholder="gender other" value={this.state.gender_other} onChange={this.handleChange}/>
          <input className="registerInput" type="text" name="date_of_birth" placeholder="date of birth" value={this.state.date_of_birth} onChange={this.handleChange}/>
          <input className="registerInput" type="text" name="race" placeholder="race" value={this.state.race} onChange={this.handleChange}/>
          <input className="registerInput" type="text" name="phone_number" placeholder="phone number" value={this.state.phone_number} onChange={this.handleChange}/>
          <input className="registerInput" type="text" name="shirt_size" placeholder="shirt size" value={this.state.shirt_size} onChange={this.handleChange}/>
          <input className="registerInput" type="text" name="linkedin" placeholder="linkedin" value={this.state.linkedin} onChange={this.handleChange}/>
          <input className="registerInput" type="text" name="github" placeholder="github" value={this.state.github} onChange={this.handleChange}/>
          <input className="registerInput" type="text" name="resume" placeholder="resume" value={this.state.resume} onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Registeration);
