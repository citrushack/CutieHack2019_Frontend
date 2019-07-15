import React, {Component} from 'react';

class Registeration extends Component {
  constructor(props){
    super(props)
    this.state = {
      Username: '',
      Email: '',
      Password: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch( 'add link to django here', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        Username: this.state.Username,
        Email: this.state.Email,
        Password: this.state.Password
      }),
      method: 'POST',
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))
      this.setState({
        Username: '',
        Password: '',
        Email: ''
      })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="Username" placeholder="Username" value={this.state.Username} onChange={this.handleChange}/>
          <input type="text" name="Email" placeholder="Email" value={this.state.Email} onChange={this.handleChange}/>
          <input type="password" name="Password" placeholder="Password" value={this.state.Password} onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
};

export default Registeration;
