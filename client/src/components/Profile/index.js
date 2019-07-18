import React, { Component } from 'react';
import { Row, Col, Card, ListGroup, Badge, Tabs, Tab, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAt, faLink, faCode } from '@fortawesome/free-solid-svg-icons';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.getMessages();
	}

	submitMessage = async event => {
		event.preventDefault();
		let newMessage = {
			email: document.getElementById('formBasicEmail').value,
			message: document.getElementById('formBasicMessage').value,
			type: 'message',
		};
		return await fetch('http://localhost:8080/messages', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},

			body: JSON.stringify({ newMessage }),
		});
	};

	getMessages = async () => {
		try {
			const response = await fetch('http://localhost:8080/messages', {
				method: 'GET',
				mode: 'no-cors',
			});

			const messages = await response.json();
			console.log('messages', messages);
		} catch (error) {
			throw error;
		}
	};

	render() {
		return (
			<div style={{ margin: 50 }}>
				<Row>
					<Col sm={4}>
						<Row>
							<div
								style={{
									width: 320,
									height: 200,
									border: '1px solid #b3b8c8',
									backgroundColor: '#c8ccdb',
									borderRadius: 4,
									color: 'white',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									fontSize: 50,
									opacity: 0.3,
									marginBottom: 50,
								}}
							>
								Profile
								<br />
								Image
							</div>
						</Row>
						<Row>
							<Row>
								<Col>
									<Card style={{ width: '20rem' }}>
										<Card.Header as="h3">Skills</Card.Header>
										<ListGroup variant="flush">
											<ListGroup.Item>
												React{' '}
												<Badge style={{ float: 'right' }} variant="info">
													5
												</Badge>{' '}
											</ListGroup.Item>
											<ListGroup.Item>
												Javascript{' '}
												<Badge style={{ float: 'right' }} variant="info">
													5
												</Badge>
											</ListGroup.Item>
											<ListGroup.Item>
												Node.js{' '}
												<Badge style={{ float: 'right' }} variant="info">
													5
												</Badge>
											</ListGroup.Item>
											<ListGroup.Item>
												MongoDB{' '}
												<Badge style={{ float: 'right' }} variant="info">
													5
												</Badge>
											</ListGroup.Item>
											<ListGroup.Item>
												Mocha/Chai{' '}
												<Badge style={{ float: 'right' }} variant="info">
													4
												</Badge>
											</ListGroup.Item>
										</ListGroup>
									</Card>
								</Col>
							</Row>
						</Row>
					</Col>

					<Col sm={8}>
						<div>
							<h3>Camille Pelletier</h3>
							<h5>Software Developer</h5>
							<p style={{ fontStyle: 'italic' }}>
								Full-Stack developer, determined to make the world more user-friendly. 2+ years
								experience developing DRY, readable and testable code. Proficient at communicating and
								dissecting complex internal goals, leading to timely project delivery. A decade in
								client-relations has translated to a programming mindset that understands the end-user.
							</p>
						</div>
						<div style={{ marginBottom: 50 }}>
							<Tabs defaultActiveKey="about" id="uncontrolled-tab-example">
								<Tab eventKey="about" title="About">
									<ListGroup variant="flush">
										<ListGroup.Item>
											<Row>
												<Col sm={4}>
													<span style={{ marginRight: 10 }}>
														<FontAwesomeIcon icon={faPhone} />
													</span>
													Phone:
												</Col>
												<Col sm={8}>438-927-1407</Col>
											</Row>
										</ListGroup.Item>
										<ListGroup.Item>
											<Row>
												<Col sm={4}>
													<span style={{ marginRight: 10 }}>
														<FontAwesomeIcon icon={faAt} />
													</span>
													Email:
												</Col>
												<Col sm={8}>camille.a.pelletier@gmail.com</Col>
											</Row>
										</ListGroup.Item>
										<ListGroup.Item>
											<Row>
												<Col sm={4}>
													<span style={{ marginRight: 10 }}>
														<FontAwesomeIcon icon={faLink} />
													</span>
													LinkedIn:
												</Col>
												<Col sm={8}>
													<a href="https://www.linkedin.com/in/camille-pelletier-00847559/">
														LinkedIn/CamillePelletier
													</a>
												</Col>
											</Row>
										</ListGroup.Item>
										<ListGroup.Item>
											<Row>
												<Col sm={4}>
													<span style={{ marginRight: 10 }}>
														<FontAwesomeIcon icon={faCode} />
													</span>
													Github:
												</Col>
												<Col sm={8}>
													<a href="https://github.com/camueljackson">CamuelJackson</a>
												</Col>
											</Row>
										</ListGroup.Item>
									</ListGroup>
								</Tab>

								<Tab eventKey="projects" title="Projects">
									<ListGroup variant="flush">
										<ListGroup.Item>
											<Row>
												<Col sm={4}>Space Agency Dashboard</Col>
												<Col sm={8}>
													<div>Stack: React / Node.js / Express / Bootstrap</div>
												</Col>
											</Row>
										</ListGroup.Item>
										<ListGroup.Item>
											<Row>
												<Col sm={4}>Linia Coda</Col>
												<Col sm={8}>
													<div>Stack: Node.js / Firebase / React / Material UI</div>
												</Col>
											</Row>
										</ListGroup.Item>
										<ListGroup.Item>
											<Row>
												<Col sm={4}>Simple Calculator</Col>
												<Col sm={8}>
													<div>Stack: C# / .Net</div>
												</Col>
											</Row>
										</ListGroup.Item>
									</ListGroup>
								</Tab>
								<Tab eventKey="messages" title="Messages">
									<ListGroup variant="flush">
										<ListGroup.Item>Message</ListGroup.Item>
									</ListGroup>
								</Tab>
							</Tabs>
						</div>
						<div style={{ marginTop: 50 }}>
							<h3>Contact Me</h3>
							<Form onSubmit={this.submitMessage}>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Enter your email address</Form.Label>
									<Form.Control type="email" placeholder="me@me.com" />
									<Form.Text className="text-muted">
										We'll never share your email with anyone else.
									</Form.Text>
								</Form.Group>

								<Form.Group controlId="formBasicMessage">
									<Form.Label>Message</Form.Label>
									<Form.Control type="text" placeholder="Your message..." />
								</Form.Group>
								<Button variant="primary" type="submit">
									Submit
								</Button>
							</Form>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Profile;
