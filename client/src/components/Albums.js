import React, { Component } from 'react';
import api from '../api';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Button, Jumbotron,Collapse,CardBody, Card} from 'reactstrap';

class Albums extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: false,   albums: [], newAlbum:{title:""} };
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
      }
    handleInputChange(event) {
        let newAlbum = this.state.newAlbum;
        newAlbum[event.target.name] = event.target.value;
      
        this.setState(...this.state, newAlbum);
      }

      handleClick(e) {
        e.preventDefault()
        let { newAlbum } = this.state;
        api.postAlbum(newAlbum)
          .then(result => {
            console.log('SUCCESS!', result)
            this.setState({
                newAlbum:{title:""},          
                 message: `Your new album '${this.state.title}' has been created`,
                 albums: [ result.album, ...this.state.albums]
            })
    
          })
      }
    componentDidMount() {
      api.getAlbums()
        .then(albums => {
          console.log(albums)
          this.setState({
            albums: albums
          })
        })
        .catch(err => console.log(err))

        
    }
    
    render() {                
      return (
        <div className="Albums">
            
          <h2>Your albums</h2>
          <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>New album</Button>
          <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
                
             <form>
           <input type="text" placeholder='title' name='title' value={this.state.newAlbum.title} onChange={(e) => {this.handleInputChange(e)}} /> <br/>
        
          <Button onClick={(e) => this.handleClick(e)}>Create album</Button>
        </form>
            </CardBody>
          </Card>
        </Collapse>

           
          {this.state.albums.map((c, i) => 
            <Jumbotron key={i} >
            <a className="display-4" tag='a' href={'/' + c._id}>{c.title}</a>
            <hr className="my-2" />
            <br/><br/>
            <Button color='primary' tag='a' href={'/' + c._id +'/pages'} >New page</Button>
            <Button color='primary' tag='a' href='/albums/:albumId'>Settings</Button>

            </Jumbotron>
            )}
          
        </div>
      );
    }
  }
  
  export default Albums;