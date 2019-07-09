import React, {Component} from 'react';
import Header from './Header'
import {
  Row, 
  Col, 
  Container, 
  Jumbotron
} from 'react-bootstrap'

class About extends Component {
 
  render () {
    return (  
      <Container>
        <Jumbotron>
          <Header title=" M2: About Us" />
        </Jumbotron>
        <Row className="justify-content-md-center">
          <Col sm={12}>
            <p>This is a sample app for management products based on Magento 2 backend</p>         
          </Col>
        </Row>
      </Container>
    )
  }

}

export default About