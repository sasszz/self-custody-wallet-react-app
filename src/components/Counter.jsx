import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0
        }
    }

    handleClick = () => this.setState({
        clickCount: this.state.clickCount + 1
    })

    render() {
        return (
            <div>
                <h1 class="blue main mt-2" id="input">${this.state.clickCount}</h1>
                <button onClick={this.handleClick}>1</button>
            </div>
        );
    }
}

export default Counter;