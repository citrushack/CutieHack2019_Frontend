import React, { Component } from 'react'

class PasswordReset extends Component{
  constructor(props){
    super(props)
    this.state = {
      password: ''
    }
  }

  handleSubmit = () => {
    fetch("http://c1078b2b.ngrok.io/api/passwordReset", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.props.match.params.token
      },
      body: JSON.stringify({
        "password": this.state.password,
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp.user) 
      })
      .catch(err => console.log(err))
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    console.log(this.props.match.params.token)
    return(
      <div>
        <input type="text" name="password" placeholder="password 1" value={this.state.password} onChange={this.handleChange}/>
        <button style={{color: 'white'}}onClick={this.handleSubmit}>on click</button>
      </div>
    )
  }
}

export default PasswordReset;
