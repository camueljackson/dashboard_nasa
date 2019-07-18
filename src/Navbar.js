import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
					<Navbar.Brand href="home">Home</Navbar.Brand>
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
				<Route path="/nasa" component={NASA} />
				<Route path="/home" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/weather" component={Weather} />
				<Route path="/profile" component={Profile} />
				<Route path="/near-earth-objects" component={NEOs} />
				<Route path="/picture-of-the-day" component={PictureOfTheDay} />
			</Router>
		);
	}
}

export default SideNav;
