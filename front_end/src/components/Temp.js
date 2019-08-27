import React, {Component} from 'react';

class Temp extends Component {
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
    fetch( 'http://3ec7978f.ngrok.io/api/profile', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        email: this.state.email,
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
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
};

export default Temp;
