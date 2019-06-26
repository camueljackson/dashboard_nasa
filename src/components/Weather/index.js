import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import '../../App.css';

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    getWeather = () => {
        try {
            axios.get(`https://samples.openweathermap.org/data/2.5/forecast/hourly?id=6077243&appid=xNYknvDWLo7DBPDXpUrd2wKFtvgbmSq3uPWu2r0Z`)
                .then(response => {
                    console.log(response)
                })
        } catch (error) {
            // TODO: handle erros
            throw error;
        }
    }

    render() {

        return (
            <div className="container">
                <Button className="learn-more" variant="info" onClick={() => this.getWeather()}>See today's weather</Button >
                Weather section
            </div>
        );
    }
}

export default About;