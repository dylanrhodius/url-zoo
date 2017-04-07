import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'node-fetch';

// React components can be simple, pure functions
function Url(props) {
	return (
		<li className="list-group-item">
			<h4>{props.originalUrl}</h4>
			<a href={'' + props.shortUrl}>{props.shortUrl}</a>
		</li>
	);
}

function UrlList(props) {
	return (
		<ul className="list-group">
			{props.urls.reverse().map(Url)}
		</ul>
	);
}

function CreateUrl(props) { // become a shortened URL
	/*
	 * - Grabs text values from `url` input;
	 * - send values to parent component (<UrlShortener />)
	 * - reset inputs
	 */
	const submit = () => {
		const urlInput = document.querySelector('#url');
		var shortenedUrl = ""

		props.onAddUrl({
			originalUrl: urlInput.value,
			shortUrl: shortenedUrl
		});

		urlInput.value = "";
		var shortenedUrl = "";
	}

	return (
		<div style={{display:'flex'}}>
			<input id="url" className="form-control"
				placeholder="Url" />

			<button className="btn btn-primary" type="button" onClick={submit}>
				Simplify Link
			</button>
		</div>
	);
}

class UrlShortener extends React.Component {
	constructor() {
		super();

		this.state = {
			urls: []
		};
	}

	componentWillMount() {
		fetch(`${window.location.origin}/urls`)
			.then(res => res.json())
			.then(data => {
				this.setState({  urls: data });
			})
	}

	/*
	 * Add newUrl to store (`this.state`) and re-render
	 */
	handleAddUrl(newUrl) {

		// Some degree of URL validation, not perfect.
		function isUrl(url) {
			var regexp = /^(ftp|http|https):\/\/[^ "]+$/;
			return regexp.test(url);
		}

		// If the validation criteria is met, POST request is sent.
		if (isUrl(newUrl.originalUrl) === true) {

			fetch(`${window.location.origin}/urls`, {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(newUrl)
			})
			.then(res => res.json())
			.then(url => {
				this.setState({
					urls: this.state.urls.concat(url)
				});
			});

		}
	}

	render() {
		return (
			<div>
				<CreateUrl onAddUrl={this.handleAddUrl.bind(this)}/>
				<UrlList urls={this.state.urls} />
			</div>
		);
	}
}

export default UrlShortener;
