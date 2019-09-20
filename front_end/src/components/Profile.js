import React, { Component } from 'react';
import Navbar from './Navbar';
import Register from './Register';
import "./css/Profile.css";
const cutieIcon = require('./assets/Icon.png');

class Profile extends Component {
  render(){
    return(
      <div>
      <Navbar />
      <div className="profileContainer">


        <div className="userInfo">
        <div className="iconPContainer">
          <div className="innerPContainer">
            <img className="iconPSizing" src={cutieIcon}></img>
          </div>
        </div>

        <div className="userName"> Scotty Bear </div>
        <div className="userEmail"> Email: sbear001@ucr.edu </div>
        </div>

        <div className="applicationStatus"> Application Status: Pending </div>


       </div>






      </div>
    )
  }
}

export default Profile;



//<div>
//
//        <div className="profileContainer">
//        <div className="iconContainer">
//          <div className="innerContainer">
//          </div>
//        </div>
//
//        </div>
//      </div>


//   <div className="iconContainer">
//          <div className="innerContainer">
//           <img className="iconSizing" src={cutieIcon}></img>
//          </div>
//        </div>