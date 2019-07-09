import React, { Component } from 'react'
import {
    Nav,
    Navbar,
    Form,
    FormControl,
    Button,
    Container,
    Row,
    Col
} from 'react-bootstrap'

const URL_USER_DATA = '/rest/V1/customers/me'

class Header extends Component {

    constructor(props) {
        super(props)

        //this.state = {
        //    userToken: localStorage.getItem('userToken') ? localStorage.getItem('userToken') : '',
        //    userData: []
        //}
    }

    componentDidUpdate() {
        console.log('Header: componentDidUpdate');
        // console.log('Header: componentDidUpdate: token: ', this.state.userToken);
       // localStorage.setItem('userToken', this.state.userToken)        
    }

    componentWillMount() {
        console.log('componentWillMount');
        // console.log('componentWillMount: state: token: ', this.state.userToken);

        //if (this.state.userToken) {
        //    fetch(URL_USER_DATA, {
        //        headers: { 'Authorization': 'Bearer ' + this.state.userToken }
        //    })
        //        .then(response => response.json())
        //        .then(data => this.setState({
        //            userData: data
        //        }))
        //}
    }

    handleLogout = () => {

        console.log('Header: did update: logout');

        //this.setState({
        //    userData: [],
        //    userToken: ''
        //})
    }

    render() {

        console.log('Header: render');
        
        const title = this.props.title ? this.props.title : 'M2: Products'

        // const userData = this.state.userData;

        //const userBlock = (userData.length !== 0) && (
        //    <Row>
        //        <Col sm={12}>
        //            <Row>{userData['firstname']}</Row>
        //            <Row>{userData['lastname']}</Row>
        //            <Row>{userData['email']}</Row>
        //            <Row><Button onClick={this.handleLogout}>Logout</Button></Row>
        //        </Col>
        //    </Row>
        //) ||
        //<h4>You are not logged in</h4>

        return (
            <Container>
                <Row>
                    {/* {userBlock} */}
                </Row>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="../logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {title}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact-us">Contacts</Nav.Link>
                            <Nav.Link href="/login">Sign In</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        )
    }
}

export default Header