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

function CreateUrl(props) { // become a shortened URL
	/*
	 * - Grabs text values from `creature` and `classification` inputs;
	 * - send values to parent component (<App />)
	 * - reset inputs
	 */
	const submit = () => {
		const creatureInput = document.querySelector('#creature');
		const classificationInput = document.querySelector('#classification');

		props.onAddMonster({
			creature: creatureInput.value,
			classification: classificationInput.value
		});

		creatureInput.value = "";
		classificationInput.value = "";
	}

	return (
		<div style={{display:'flex'}}>
			<input id="creature" className="form-control"
				placeholder="Url" />

			<input id="classification" className="form-control"
				placeholder="Classification" />

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
				<CreateUrl onAddMonster={this.handleAddUrl.bind(this)}/>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('example')
);
