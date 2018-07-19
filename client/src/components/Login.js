import React, { Component } from 'react';
import api from '../api';
import {Form, FormGroup, Label, Input, Container, Jumbotron, Button} from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
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
    api.login(this.state.email, this.state.password)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/") // Redirect to the home page
      })
      .catch(err => {
        console.log('ERROR')
      })
  }

  render() {   
    return (
      <div className="Login">
      <Container>
        <Jumbotron>   
        <h1>Login</h1>
        <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="example@example.com" value={this.state.email} onChange={(e) => {this.handleInputChange("email", e)}}/>
        </FormGroup>
       
        <FormGroup>
        <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" value={this.state.password} onChange={(e) => {this.handleInputChange("password", e)}}  />
        </FormGroup>
          <br/>
          <Button color='danger' onClick={(e) => this.handleClick(e)}>Login</Button>
        </Form>
        </Jumbotron>
        </Container>
        
      </div>
    );
  }
}

export default Login;
