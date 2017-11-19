import {PureComponent} from 'react';
import ReactDOM from 'react-dom';

import MF from '../../src/';

class App extends PureComponent {
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
                <br />
                <MF mf={this.state.mf}></MF>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('example')
);
