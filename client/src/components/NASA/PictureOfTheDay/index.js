import React, { Component } from 'react';
import { Button, Image, Jumbotron, Spinner } from 'react-bootstrap';
import axios from 'axios';
import '../../../App.css';

class PictureOfTheDay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
		};
	}

	componentDidMount() {
		this.getAPOD();
	}

	getAPOD() {
		try {
			axios
				.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
				.then(response => {
					this.setState({
						data: response.data,
					});
					console.log(response);
				});
		} catch (error) {
			// TODO: handle erros
			throw error;
		}
	}

	render() {
		const { data } = this.state;

		return (
			<div>
				{!data ? (
					<Spinner animation="border" />
				) : (
					<div>
						<Jumbotron>
							<h1>{data.title}</h1>
							<p>{data.date}&nbsp;| &nbsp;NASA's explanation:</p>
							<p>
								<i>{data.explanation}</i>
							</p>
							<a
								href="https://www.nasa.gov/multimedia/imagegallery/iotd.html"
								target="_blank"
								rel="noopener noreferrer"
							>
								Visit Gallery of Past Images
							</a>
						</Jumbotron>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<Image src={data.url} fluid />
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default PictureOfTheDay;
