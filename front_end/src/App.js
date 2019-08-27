import React, { Component } from 'react'
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import {connect} from 'react-redux';
import { getProfileFetch } from './redux/actions';

class App extends Component {
  componentDidMount = () => {
    this.props.getProfileFetch()
  }

  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/home" component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(mapStatetoProps, mapDispatchToProps)(App);
