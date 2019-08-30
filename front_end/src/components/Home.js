import React, { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    auth: true
  }

  render(){
    return(
      <div>
        <Navbar auth={this.state.auth}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

}

export default connect(mapStateToProps, null)(Home);
