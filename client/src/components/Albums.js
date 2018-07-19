import React, { Component } from 'react';
import api from '../api';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {Button, Jumbotron,Collapse,CardBody, Card, Form, FormGroup, CardImg, CardText, 
  CardTitle, CardSubtitle,Container, Row, Col, Modal} from 'reactstrap';

class Albums extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { modal: false,  
          albums: [],
          newAlbum:{title:""} };
    }
    toggle() {
        this.setState({ modal: !this.state.modal });
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
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <Card>
            <CardBody>
            
             <Form>
               <FormGroup>
           <input type="text" placeholder='title' name='title' value={this.state.newAlbum.title} onChange={(e) => {this.handleInputChange(e)}} /> 
           </FormGroup>
           <br/>
        
          <Button onClick={(e) => this.handleClick(e)}>Create album</Button>
        </Form>
            </CardBody>
          </Card>
        </Modal>

           <Container>
               <Row>
               
          {this.state.albums.map((c, i) => 
                      
            <Col sm='6' key={i}>
            <a className="display-4"  href={'/' + c._id}>{c.title}</a>
            <hr className="my-2" />
            <br/><br/>
{/*           
            <Button color='primary' tag='a' href='/albums/:albumId'>Settings</Button> */}

            </Col>
          
          
          )}
          
          </Row>
            </Container>
        </div>
      );
    }
  }
  
  export default Albums;