import React, { Component } from 'react';
import { Card, Button, Jumbotron, Spinner } from 'react-bootstrap';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Jumbotron>
					<h1>Customize your dashboard</h1>
					<p>Explore the sections below and decide what you want on your dashboard</p>
				</Jumbotron>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default Profile;
