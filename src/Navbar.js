import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, About, Profile, Weather } from './components';
import { NASA } from './components';

class SideNav extends Component {
    state = {
        collapsed: false,
    };

    render() {
        return (
            <Router>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="home">Home</Navbar.Brand>
                    <Nav className="mr-auto">

                        <NavDropdown title="Agencies" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/nasa">
                                NASA
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/canadian-space-agency">
                                Canadian Space Agency
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">ESA</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link className="mr-sm-2" href="/about">About</Nav.Link>
                        <Nav.Link className="mr-sm-2" href="/weather">Weather</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/profile">
                            <span style={{ marginRight: 10 }}>
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            Profile</Nav.Link>
                    </Nav>
                </Navbar>
                <Route path="/nasa" component={NASA} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/weather" component={Weather} />
                <Route path="/profile" component={Profile} />
            </Router>
        );
    }
}

export default SideNav;