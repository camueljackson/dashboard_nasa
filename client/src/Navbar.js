import React, { Component } from 'react';
import { Nav, Navbar, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Home, About, Profile, Weather, NASA } from './components';
import { NEOs, PictureOfTheDay } from './components/NASA';

class SideNav extends Component {
	state = {
		collapsed: false,
		logoutColor: null,
	};

	render() {
		const { logoutColor } = this.state;

		return (
			<Router>
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand href="/">Home</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link className="mr-sm-2" href="/nasa">
							NASA
						</Nav.Link>
						<Nav.Link className="mr-sm-2" href="/about">
							About
						</Nav.Link>
						<Nav.Link className="mr-sm-2" href="/weather">
							Weather
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="/profile">
							<span style={{ marginRight: 10 }}>
								<FontAwesomeIcon icon={faUser} />
							</span>
							Profile
						</Nav.Link>
						<Nav.Link
							className="mr-sm-2"
							href="#"
							onMouseEnter={() => this.setState({ logoutColor: '#e48a8a' })}
							onMouseLeave={() => this.setState({ logoutColor: null })}
							style={{ color: logoutColor }}
						>
							Logout
						</Nav.Link>
					</Nav>
				</Navbar>
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/nasa" component={NASA} exact />
					<Route path="/about" component={About} exact />
					<Route path="/weather" component={Weather} exact />
					<Route path="/profile" component={Profile} exact />
					<Route path="/near-earth-objects" component={NEOs} exact />
					<Route path="/picture-of-the-day" component={PictureOfTheDay} exact />
					<Route
						render={() => (
							<Card style={{ margin: 50 }}>
								<Card.Header as="h2"> 404: Not Found</Card.Header>
								<Card.Body>
									<Button variant="primary" href="/">
										Go Back Home
									</Button>
								</Card.Body>
							</Card>
						)}
					/>
					<Redirect
						to={{
							pathname: '/',
						}}
					/>
				</Switch>
			</Router>
		);
	}
}

export default SideNav;
