// React components can be simple, pure functions
function Url(props) {
	return (
		<li className="list-group-item">
			<h4>{props.creature}</h4>
			<p>{props.classification}</p>
		</li>
	);
}

function UrlList(props) {
	return (
		<ul className="list-group">
			{props.monsters.map(Url)}
		</ul>
	);
}

function genShortURL()
{
    var generatedUrl = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        generatedUrl += possible.charAt(Math.floor(Math.random() * possible.length));

    return generatedUrl;
}


function CreateUrl(props) { // become a shortened URL
	/*
	 * - Grabs text values from `creature` and `classification` inputs;
	 * - send values to parent component (<App />)
	 * - reset inputs
	 */
	const submit = () => {
		const urlInput = document.querySelector('#url');
		const shortenedUrl = genShortURL();

		props.onAddUrl({
			creature: urlInput.value,
			classification: shortenedUrl
		});

		urlInput.value = "";
	}

	return (
		<div style={{display:'flex'}}>
			<input id="url" className="form-control"
				placeholder="Url" />

			<button className="btn btn-primary" type="button" onClick={submit}>
				Shorten Url!
			</button>
		</div>
	);
}

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			monsters: []
		};
	}

	componentWillMount() {
		fetch('/urls')
			.then(res => res.json())
			.then(data => {
				this.setState({  monsters: data });
			})
	}

	/*
	 * Add newMonster to store (`this.state`) and re-render
	 */
	handleAddUrl(newMonster) {
		fetch('/urls', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newMonster)
		})
		.then(res => res.json())
		.then(monster => {
			this.setState({
				monsters: this.state.monsters.concat(monster)
			});
		});
	}

	render() {
		return (
			<div>
				<UrlList monsters={this.state.monsters} />
				<CreateUrl onAddUrl={this.handleAddUrl.bind(this)}/>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('example')
);
