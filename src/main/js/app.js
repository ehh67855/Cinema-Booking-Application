const React = require('react');
const ReactDOM = require('react-dom'); 
const client = require('./client'); 

//creates a React component
class App extends React.Component { 

	constructor(props) {
		super(props);
		this.state = {employees: []};
	}

    //componentDidMount is the API invoked after React renders a component in the DOM.
	componentDidMount() { 
		client({method: 'GET', path: '/api/employees'}).done(response => {
			this.setState({employees: response.entity._embedded.employees});
		});
	}

    //render is the API that “draws” the component on the screen.
	render() {
		return (
            <p>Hello World</p>
		)
	}
}