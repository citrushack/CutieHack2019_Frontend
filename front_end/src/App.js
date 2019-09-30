import React, { Component } from 'react'
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import Register from './components/Register';
import PasswordReset from './components/PasswordReset';
import AdminDashboard from './components/AdminDashboard';
import ForgotPassword from './components/ForgotPassword';
import './App.css';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { getProfileFetch } from './redux/actions';

function PrivateRoute ({component: Component, ...rest}) {
  return(
    <Route
      {...rest}
      render={(props) => 'false' === 'True'
      ? <Component {...props} />
      : <Redirect to={{pathname:'/home', state: {from: props.location}}} />}
      />
  )
}

class App extends Component {
  componentDidMount = () => {
    this.props.getProfileFetch()
  }

  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/ForgotPassword" component={ForgotPassword}/>
            <Route path="/passwordReset/:token" component={PasswordReset}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/administratorDashboard" component={AdminDashboard}/>
            {/*<PrivateRoute path='/profile' component={Profile}/>*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
