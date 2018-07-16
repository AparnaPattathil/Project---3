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
        
          <button onClick={(e) => this.handleClick(e)}>Create album</button>
        </form>
            </CardBody>
          </Card>
        </Collapse>

            {/* <Button color='primary' tag='a' href='/add-album'>
            <FontAwesomeIcon icon="faPlus" />New album
            </Button> */}

          {this.state.albums.map((c, i) => 
            <Jumbotron key={i} >
            <a className="display-4" tag='a' href={'/albums/' + c._id}>{c.title}</a>
            <hr className="my-2" />
            <Button color='primary' tag='a' href='/albums/:albumId'>List all pages</Button>
            <br/><br/>
            <Button color='primary' tag='a' href=''>New page</Button>
            <Button color='primary' tag='a' href='/albums/:albumId'>Settings</Button>

            </Jumbotron>
            )}
          
        </div>
      );
    }
  }
  
  export default Albums;