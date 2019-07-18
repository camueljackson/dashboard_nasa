import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Card, Button } from 'react-bootstrap';

class NASA extends Component {
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

				<Row style={{ margin: 50 }}>
					<Col sm={6}>
						<Card>
							<Card.Header>Near Earth Objects</Card.Header>
							<Card.Body>
								<Card.Text>See NASA's List of NEOs!</Card.Text>
								<Link to="./near-earth-objects">
									<Button type="button" className="learn-more">
										Naviagate to NEOs
									</Button>
								</Link>
							</Card.Body>
						</Card>
					</Col>
					<Col sm={6}>
						<Card>
							<Card.Header>Picture of the Day</Card.Header>
							<Card.Body>
								<Card.Text>See NASA's Selected Image for Today!</Card.Text>
								<Link to="./picture-of-the-day">
									<Button type="button" className="learn-more">
										Naviagate to Picture of the Day
									</Button>
								</Link>
							</Card.Body>
						</Card>
					</Col>
				</Row>

				<Row style={{ marginRight: 50, marginLeft: 50 }}>
					<Col sm={6}>
						<Card>
							<Card.Header>Space Weather</Card.Header>
							<Card.Body>
								<Card.Text>See the Weather in Space!</Card.Text>
								<Link to="./near-earth-objects">
									<Button type="button" className="learn-more">
										Naviagate to Space Weather
									</Button>
								</Link>
							</Card.Body>
						</Card>
					</Col>
					<Col sm={6}>
						<Card>
							<Card.Header>Exoplanet Archive</Card.Header>
							<Card.Body>
								<Card.Text>Discover the Exoplanet Archives!</Card.Text>
								<Link to="./picture-of-the-day">
									<Button type="button" className="learn-more">
										Naviagate to Exoplanet Archive
									</Button>
								</Link>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default NASA;
