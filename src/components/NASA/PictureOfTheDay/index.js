import React, { Component } from 'react';
import { Button, Image } from 'react-bootstrap';
import axios from 'axios';
import '../../../App.css';

class PictureOfTheDay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			apod: null,
		};
	}

	getAPOD() {
		try {
			axios
				.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
				.then(response => {
					this.setState({
						apod: response.data.url,
					});
				});
		} catch (error) {
			// TODO: handle erros
			throw error;
		}
	}

	render() {
		const { apod } = this.state;

		return (
			<div>
				<Button className="learn-more" variant="info" onClick={() => this.getAPOD()}>
					Get Picture of the day
				</Button>
				<div>{apod ? <Image src={apod} fluid /> : null}</div>
			</div>
		);
	}
}

export default PictureOfTheDay;
