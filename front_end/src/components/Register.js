import React, {Component} from 'react';

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
      graduation_year: '',
      major: '',
      gender: '',
      date_of_birth: '',
      race: '',
      phone_number: '',
      shirt_size: '',
      linkedin: '',
      github: '',
      resume: '',
      conduct_box: false,
      share_box: false
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch( 'http://3ec7978f.ngrok.io/api/apply', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        email: this.state.email,
        password1: this.state.password1,
        password2: this.state.password2,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        school: this.state.school,
        graduation_year: this.state.graduation_year,
        major: this.state.major,
        gender: this.state.gender,
        date_of_birth: this.state.date_of_birth,
        race: this.state.race,
        phone_number: this.state.phone_number,
        shirt_size: this.state.shirt_size,
        linkedin: this.state.linkedin,
        github: this.state.github,
        resume: this.state.resume,
        conduct_box: this.state.conduct_box,
        share_box: this.state.share_box
      }),
      mode: 'no-cors',
      method: 'POST'
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))
  }

  render(){
    return(
      <div>

        <form onSubmit={this.handleSubmit}>
          <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
          <input type="password" name="password1" placeholder="password1" value={this.state.password1} onChange={this.handleChange}/>
          <input type="password" name="password2" placeholder="password2" value={this.state.password2} onChange={this.handleChange}/>
          <input type="text" name="first_name" placeholder="first name" value={this.state.first_name} onChange={this.handleChange}/>
          <input type="text" name="last_name" placeholder="last name" value={this.state.last_name} onChange={this.handleChange}/>
          <input type="text" name="school" placeholder="school" value={this.state.school} onChange={this.handleChange}/>
          <input type="text" name="graduation_year" placeholder="graduation year" value={this.state.graduation_year} onChange={this.handleChange}/>
          <input type="text" name="major" placeholder="major" value={this.state.major} onChange={this.handleChange}/>
          <input type="text" name="gender" placeholder="gender" value={this.state.gender} onChange={this.handleChange}/>
          <input type="text" name="date_of_birth" placeholder="date of birth" value={this.state.date_of_birth} onChange={this.handleChange}/>
          <input type="text" name="race" placeholder="race" value={this.state.race} onChange={this.handleChange}/>
          <input type="text" name="phone_number" placeholder="phone number" value={this.state.phone_number} onChange={this.handleChange}/>
          <input type="text" name="shirt_size" placeholder="shirt size" value={this.state.shirt_size} onChange={this.handleChange}/>
          <input type="text" name="linkedin" placeholder="linkedin" value={this.state.linkedin} onChange={this.handleChange}/>
          <input type="text" name="github" placeholder="github" value={this.state.github} onChange={this.handleChange}/>
          <input type="text" name="resume" placeholder="resume" value={this.state.resume} onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
};

export default Registeration;
