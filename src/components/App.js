import React, {Component} from 'react';
import ArticleList from './ArticleList'
// import articles from './fixtures'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header'
import {
  Button,
  Row, 
  Col, 
  Container, 
  Jumbotron, 
  Spinner,
  Pagination
} from 'react-bootstrap'

// const DATA_URL = '/rest/V1/products?searchCriteria[sortOrders][0][field]=created_at&searchCriteria[pageSize]=5'
const DATA_URL = '/en/blog/indexapi'
const DATA_COUNT_URL = '/en/blog/count'
// const ALL_DATA_URL = '/rest/V1/products?searchCriteria[pageSize]=0'

/*
Need to retain this key somewhere
http://magtest2.local/rest/V1/integration/admin/token

Blacklist items inquiry 
http://magtest2.local/rest/V1/blacklist/products
*/

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      reverted: false,
      currentPage: 1,
      data: [],
      count: 0
    }
  }

  componentDidMount() {

    let url = DATA_URL
    if (this.state.currentPage !== 0) {
      url += '/' + this.state.currentPage
    }

    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({data: data}))

    fetch(DATA_COUNT_URL)
    .then(response => response.json())
    .then(data => this.setState({count: data}))
  }

  render () {

    console.log('data => ', this.state.data);
    

    const spinner = this.state.data.length <= 0 && <Spinner animation="border"/>
    let pagerItems = []
    let active = this.state.currentPage
    let countOfPages = Math.ceil(this.state.count / 5)
    
    for (let number = 1; number <= countOfPages; number++) {
      if (!(number >= active - 2 && number <= active + 2) && number == 1 && active !== 1) {
        pagerItems.push(
          <Pagination.First key={number} onClick={this.handlePagerClick.bind(this, number)} />
        );
        pagerItems.push(
          <Pagination.Item onClick={this.handlePagerClick.bind(this, number)}>
            {number}
          </Pagination.Item>
        );
        pagerItems.push(
          <Pagination.Ellipsis />
        );
      } else if (number >= active - 2 && number <= active + 2) {
        pagerItems.push(
          <Pagination.Item key={number} active={number === active} onClick={this.handlePagerClick.bind(this, number)} >
            {number}
          </Pagination.Item>
        );
      } else if (!(number >= active - 2 && number <= active + 2) && number == countOfPages && active !== countOfPages) {
        pagerItems.push(
          <Pagination.Ellipsis />
        );
        pagerItems.push(
          <Pagination.Item onClick={this.handlePagerClick.bind(this, number)}>
            {number}
          </Pagination.Item>
        );
        pagerItems.push(
          <Pagination.Last key={number} onClick={this.handlePagerClick.bind(this, number)} />
        );
      }
    }

    const pager = <Pagination>
      {pagerItems}
    </Pagination>

    return (
      <Container>
        <Jumbotron>
          <Header title="Symf Client: Posts Management" />
        </Jumbotron>
        <Row className="justify-content-md-center">
          <Col sm={8} md={8} lg={6}>
            {pager}
          </Col>
          <Col sm={2} md={2} lg={4}>
            {spinner}
          </Col>
          <Col sm={2} md={2} lg={2}><Button variant="primary" onClick = {this.handleRevertList}>Revert</Button></Col>

        </Row>
        <Row className="justify-content-md-center">
          <Col sm={12}>
            <ArticleList articles={this.state.reverted ? this.state.data.slice().reverse() : this.state.data} />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col sm={12}>
          {pager}
          </Col>
        </Row>
      </Container>
    )
  }

  handleRevertList = () => {
    this.setState({
      reverted: !this.state.reverted
    })
  }

  handlePagerClick = (number) => {

    this.setState({data: []})

    let url = DATA_URL
    if (number !== 0) {
      url += '/' + number
    }

    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({
      data: data,
      currentPage: number
    }))
  }
}

export default App