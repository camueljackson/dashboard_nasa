import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'react-bootstrap';
import NEOs from './NEOs';
import PictureOfTheDay from './PictureOfTheDay';

class NASA extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Customize your dashboard</h1>
                    <p>
                        Explore the sections below and decide what you want on your dashboard
            </p>
                </Jumbotron>
                <Row>
                    <Col>
                        <div style={{
                            textAlign: 'center', marginBottom: 30, fontSize: 25, color: '#898787'
                        }}>
                            Near Earth Objects
                    </div>
                        <div style={{ textAlign: 'center', textDecoration: 'italic' }} >
                            <NEOs />
                        </div>
                    </Col>

                    <Col>
                        <div style={{
                            textAlign: 'center', marginBottom: 30, fontSize: 25, color: '#898787'
                        }}>
                            Picture of the Day
                    </div>
                        <div style={{ textAlign: 'center' }} >
                            <PictureOfTheDay />
                        </div>
                    </Col>

                </Row>
            </div>

        );
    }
}

export default NASA