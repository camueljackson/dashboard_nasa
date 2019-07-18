import React, { Component } from 'react';
import { Jumbotron, Button, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import '../../../App.css';

class NEOs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			NEOs: [],
		};
	}

	componentDidMount() {
		this.getNEO();
	}

	getNEO = () => {
		try {
			axios
				.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
				.then(response => {
					this.setState({
						NEOs: response.data.near_earth_objects,
					});
				});
		} catch (error) {
			// TODO: handle erros
			throw error;
		}
	};

	render() {
		const { NEOs } = this.state;

		return (
			<div>
				<Jumbotron>
					<h1>Near Earth Objects</h1>
					<p>
						Explore NASA's list of Near Earth Objects! Click on any below to visit their individual details
						page.
					</p>
				</Jumbotron>
				{NEOs.length > 0 ? (
					<Row>
						{NEOs.map(item => {
							return (
								<Col sm={6} key={item.id}>
									<Card style={{ margin: 20 }}>
										<Card.Header as="h4">{item.name}</Card.Header>
										<Card.Body>
											Absolute Magnitude: {item.absolute_magnitude_h}
											<br />
											Potentially Hazardous:{' '}
											{item.is_potentially_hazardous_asteroid ? 'True' : 'False'}
											<br />
											<br />
											For More Details:
											<br />
											<Button
												type="button"
												href={item.nasa_jpl_url}
												target="_blank"
												rel="noopener noreferrer"
												className="learn-more"
											>
												Visit NEO Page
											</Button>
										</Card.Body>
									</Card>
								</Col>
							);
						})}
					</Row>
				) : null}
			</div>
		);
	}
}

export default NEOs;
