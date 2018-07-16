// Example of component you can copy/paste to create new components


import React, { Component } from 'react';
import {Container, Jumbotron,Button,Col, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
//import { Route, Switch, NavLink, Link } from 'react-router-dom';
import api from '../api';
// import './Sample.css';

class AlbumDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      album: null
    }
  }

  
  handleInputChange(pageField, i, event) {
    let newPages = this.state.album._pages.slice()
    newPages[i] = {
      ...newPages[i],
      [pageField]: event.target.value
    }
    let newState = {
      album: {
        ...this.state.album,
        _pages: newPages
      }
    }
    this.setState(newState)
  }


  componentDidMount() {
    api.getAlbum(this.props.match.params.albumId)
    .then(album => {
      this.setState({
        album
      })
    })
  }
  render() {
    if (!this.state.album)
      return "Loading"
    console.log('props',this.props)
    let title=this.props.title;               
    return (
      <div className="AlbumDetail">
        <Container>
          {this.props.match.params.albumId} <br/>
          {this.state.album._pages.map((page, i) =>
            <div>
              {JSON.stringify(page)}
              <br/>
             Title: <Input type="textarea" name="title" value={ page.title} id="exampleText" onChange={(e) => {this.handleInputChange("title", i, e)}} />
             <br/>
             <h2>Pages</h2>
             <hr/>
             {page.name}
             <hr/>
              {page.date}
              <hr/>
              Text: <Input type="textarea" name="text" value={ page.text} id="example" onChange={(e) => {this.handleInputChange("text", i, e)}} />
     
           


            
            </div>
          )}
         
        </Container>
      </div>
    );
  }
}

export default AlbumDetail;
