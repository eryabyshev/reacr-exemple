import React, {useState} from "react";


class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.inc = this.inc.bind(this)
        this.dec = this.dec.bind(this)
    }
    inc() {
        this.setState({counter: this.state.counter + 1})
    }
    dec() {
        this.setState({counter: this.state.counter - 1})
    }
    render() {
        return (
            <div>
                <h3>{this.state.counter}</h3>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        );
    }

}

export default ClassCounter;