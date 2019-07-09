import React, { Component } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import '../../../../App.css';

class NEOs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            NEOs: []
        }
    }

    getNEO = () => {
        try {
            axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
                .then(response => {
                    this.setState({
                        NEOs: response.data.near_earth_objects
                    })
                })
        } catch (error) {
            // TODO: handle erros
            throw error;
        }
    }


    render() {
        const { NEOs } = this.state;

        return (
            <div>
                <Button className="learn-more" variant="info" onClick={() => this.getNEO()}>Explore Nasa's list of NEOs</Button >
                <div>
                    {NEOs.length > 0 ?
                        <ListGroup>
                            {NEOs.map(item => {
                                console.log(item)
                                return (
                                    <ListGroup.Item key={item.name}>
                                        <p>Name: {item.name}</p>
                                        <a href={item.nasa_jpl_url} target='_blank' rel="noopener noreferrer">Visit this NEO's page</a>
                                    </ListGroup.Item>
                                )
                            })}
                        </ListGroup>
                        : null}
                </div>
            </div>
        );
    }
}

export default NEOs;