import React, { Component } from 'react';
import './App.css';
import Charbox from './Charbox/Charbox'


class App extends Component {

  state = {
		inputString: ''
  }

	changeState = ( event ) => {
		this.setState( { inputString: event.target.value } )
	}

	deleteCharHandler(charIndex) {
  	let inputStr = this.state.inputString
		const a = inputStr.split('');
		a.splice(charIndex, 1);
		inputStr = a.join('');
		this.setState( { inputString: inputStr } )
	}



  render() {

  	const charArray = this.state.inputString.split('');
  	console.log(charArray);
  	let charboxes = charArray.map((character, index) => {
  		return <Charbox letter={character} click={() => this.deleteCharHandler(index)} />
  	})

  	return (
			<div>
				<input type={'text'} onChange={this.changeState} value={this.state.inputString}/>
				{charboxes}
				<h2>hejsvejs</h2>

      </div>
		);
	}
}

export default App;
