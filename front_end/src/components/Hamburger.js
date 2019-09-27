import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, NavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer }
from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/Hamburger.css';


class Hamburger extends Component {
state = {
  collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

  HomeRedirect = () => {
    window.location.assign('/')
  }

render() {
  return (
    <div className="hamburgerContainer">
      <MDBContainer>
        <MDBNavbar color="light-blue lighten-4" style={{ marginTop: '20px' }} light>
          <MDBContainer>

            <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse1')} />
            <MDBCollapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
              <NavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="#">HOME</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#section2">ABOUT</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#section3">FAQs</MDBNavLink>
                </MDBNavItem>
              </NavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
    </div>
    );
  }
}

export default Hamburger;

//
//<button style={nav} className="buttons" onClick={this.HomeRedirect}>HOME</button>
//           <a className="buttons" href='#section2'>ABOUT</a>
//           <a className="buttons" href='#section3'>FAQs</a>
//           <a className="buttons" href='#section4'>SPONSORS</a>
//           <a className="buttons" href='#section5'>CONTACT</a>