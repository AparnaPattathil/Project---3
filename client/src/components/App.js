import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Albums from './Albums';
import AlbumDetail from './AlbumDetail';
import Secret from './Secret';
import Login from './Login';
import Signup from './Signup';
import api from '../api';
import logo from '../logo.svg';
import './App.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      albums: []
    }
    api.loadUser();
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() { 
    
                                 
    return (
      <div className="App">

<div>
  <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">millithink</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
              {api.isLoggedIn() && <NavLink href="/albums">Albums</NavLink> }
              </NavItem>
              <NavItem>
              {!api.isLoggedIn() && <NavLink href="/signup">Signup</NavLink> }
              </NavItem>
              <NavItem>
              {!api.isLoggedIn() && <NavLink href="/login">Login</NavLink> }
              </NavItem>
             
              <NavItem>
              {api.isLoggedIn() && <NavLink href="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</NavLink> }
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
</div>

       
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/albums"  component={Albums} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/secret" component={Secret} />
          <Route path='/:albumId' component={AlbumDetail} />
          <Route render={() => <h2>404</h2>} />
        </Switch>        
      </div>
    );
  }
}

export default App;
