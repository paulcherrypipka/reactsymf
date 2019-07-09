import React, {PureComponent} from 'react';
import {Button, Container, Row, Col, Card} from 'react-bootstrap'

class Article extends PureComponent {

	render() {
			const {article, isOpen,	 onButtonClick} = this.props
			  const body = isOpen &&
			  <Card.Body>
					<Container>
					<Row><Col>
						<Card.Text>Title: {article.title}</Card.Text>
						<Card.Text>Summary: ${article.summary}</Card.Text>
						{/* <Card.Text>sku: {article.sku}</Card.Text> */}
						{/* <Card.Text>creation date: {(new Date(article.created_at)).toDateString()}</Card.Text> */}
					</Col></Row>
					</Container>
			    </Card.Body> 
			  
		  	return (
		    <Card>
		        <Card.Header onClick={onButtonClick}>
		        	<h2>
			        	{article.title}
			        	<Button size="sm" variant="dark" onClick={onButtonClick} className="float-right">
			        		{isOpen ? 'close' : 'open'}
			        	</Button>
			        </h2>
		        </Card.Header>
				{body}
		    </Card>
		    )		
	}
}

export default Article