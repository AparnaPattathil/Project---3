import React, { Component } from 'react';
import api from '../api';

import {Form, FormGroup, Label, Input, Container, Jumbotron, Button} from 'reactstrap';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      name: "",
      password: "",
     
    }
  }

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value
  
    this.setState(newState)
  }

 
  handleClick(e) {
    e.preventDefault()
    let data = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
    }
    api.signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/login") // Redirect to the login page
      })
      .catch(err => {
        console.log('ERROR')
      })
  }

  render() {   
    return (
      <div className="Signup">
      <Container>
        <Jumbotron>   
        <h1>Signup</h1>
        <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="example@example.com" value={this.state.email} onChange={(e) => {this.handleInputChange("email", e)}}/>
        </FormGroup>
        <FormGroup>
        <Label for="name">Name</Label>
          <Input type="password" name="password" id="name" placeholder="name" value={this.state.name} onChange={(e) => {this.handleInputChange("name", e)}} />
        </FormGroup>
        <FormGroup>
        <Label for="examplePassword">Password</Label>
          
          <Input type="password" name="password" id="examplePassword" placeholder="password" value={this.state.name} onChange={(e) => {this.handleInputChange("name", e)}}  />
        </FormGroup>
          <br/>
          <Button color='danger' onClick={(e) => this.handleClick(e)}>Signup</Button>
        </Form>
        </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default Signup;
