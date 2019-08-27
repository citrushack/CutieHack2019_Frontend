import React, { Component } from 'react'
import { connect } from 'react-redux';


class Home extends Component {
  render(){
    return(
      <div> hey guys </div>
    )
  }
}



export default connect(mapStateToProps)(Home);
