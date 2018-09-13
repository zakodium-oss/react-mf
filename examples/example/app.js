import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { MF } from '../../src/';

const App = class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mf: 'C6H6'
    };
  }

  onInputChange(event) {
    this.setState({
      mf: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input onChange={this.onInputChange.bind(this)} />
        <MF mf={this.state.mf} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('example'));
