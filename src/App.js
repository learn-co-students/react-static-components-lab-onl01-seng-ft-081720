import React, { Component } from 'react';
import CatComponent from './CatComponent';

// NOTE I added a default in file GraceHopperQuoteComponent.js
// LEARNCO solution below
// import {GraceHopperQuoteComponent} from './GraceHopperQuoteComponent.js'
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent';
import MouseComponent from './MouseComponent';


class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent />
			</div>
		);
	}
}

export default App;
