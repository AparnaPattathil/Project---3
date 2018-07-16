import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {                
    return (
      <div className="Home">
        <h1>millithink</h1>
        <Button outline color="primary" tag="a" href="/login">
           Scribble down your milli thoughts
        </Button>
       
      </div>
    );
  }
}

export default Home;
