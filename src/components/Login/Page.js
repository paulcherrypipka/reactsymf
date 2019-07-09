import React, { Component } from 'react';
import Header from '../Header'
import {
  Row,
  Col,
  Container,
  Jumbotron
} from 'react-bootstrap'
import LoginForm from './Form'

const URL_CUSTOMER_TOKEN_BASE = '/rest/V1/integration/customer/token'
const URL_USER_DATA = '/rest/V1/customers/me'

class LoginPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userToken: localStorage.getItem('userToken') ? localStorage.getItem('userToken') : '',
      userData: []
    }
  }

  handleSubmit = (e) => {

    console.log('handleSubmit');
    e.preventDefault();
    const { email, password } = e.target

    // Fetching of customer API token by customer credentials
    fetch(URL_CUSTOMER_TOKEN_BASE +
      '?username=' + email.value +
      '&password=' + password.value,
      { method: 'POST' })
      .then(response => response.json())
      .then(tokenData => fetch(URL_USER_DATA, {
        headers: { 'Authorization': 'Bearer ' + tokenData }
      })
        .then(response => response.json())
        .then(data => this.setState({
          userToken: tokenData,
          userData: data
        })))
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    console.log('componentDidUpdate: token: ', this.state.userToken);
    localStorage.setItem('userToken', this.state.userToken)
    window.location.reload()
  }

  render() {

    return (
      <Container>
        <Jumbotron>
          <Header title=" M2: Login" />
        </Jumbotron>
        <Row className="justify-content-md-center">
          <Col sm={12}>
            <p>Sign In</p>
            <LoginForm handleSubmit={this.handleSubmit.bind(this)} />
          </Col>
        </Row>
      </Container>
    )
  }

}

export default LoginPage