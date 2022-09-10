import React, { Component } from 'react';

class CounterButton extends Component {
    handleClick = () => this.setState({
        clickCount: this.state.clickCount + 1
    })

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>1</button>
            </div>
        );
    }
}

export default CounterButton;