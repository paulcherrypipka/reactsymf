import React, {Component} from 'react';
import Header from './Header'
import {
  Row, 
  Col, 
  Container, 
  Jumbotron, 
} from 'react-bootstrap'


class Contact extends Component {

  render () {
    return (
      <Container>
        <Jumbotron>
          <Header title=" M2: Contact Us" />
        </Jumbotron>
        <Row className="justify-content-md-center">
          <Col sm={12} md={8} lg={6}>
            <p>Contact information</p>
            <p>Contact information</p>
            <p>Contact information</p>
            <p>Contact information</p>
          </Col>
        </Row>
      </Container>
    )
  }

}

export default Contact