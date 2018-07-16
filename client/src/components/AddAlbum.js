import React, { Component } from 'react';
import axios from 'axios';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
import api from '../api';
// import './AddCountry.css';


class AddAlbum extends Component {
  constructor(props) {
    super(props)
    this.state = {
     title: '',
     _pages: [],
     _owner: ''

    }
  }

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value
  
    this.setState(newState)
  }

  handleClick(e) {
    e.preventDefault()
    console.log(this.state.title, this.state._pages)
    let data = {
      title: this.state.title
     
    }
    api.postAlbums(data)
      .then(result => {
        console.log('SUCCESS!')
        this.setState({
         title: '',
          message: `Your new album '${this.state.title}' has been created`
        })
  //       setTimeout(() => {
  //         this.setState({
  //           message: null
  //         })
  //       }, 2000)
  //     })
  //     .catch(err => {
  //       console.log('ERROR')
      })
  }
  render() {                
    return (
      <div className="AddAlbum">
        <h2>Add album</h2>
        <form>
           <input type="text" placeholder='title' value={this.state.title} onChange={(e) => {this.handleInputChange("title", e)}} /> <br/>
        
          <button onClick={(e) => this.handleClick(e)}>Create album</button>
        </form>
        <div style={{
          margin: 10,
          backgroundColor: "red",
          display: this.state.message ? "block" : "none"
        }}>
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default AddAlbum;
