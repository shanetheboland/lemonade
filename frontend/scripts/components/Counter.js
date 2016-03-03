import React, { Component, PropTypes } from 'react';

class Counter extends Component {
	handleClick() {
		this.props.actions.increment();
	}
	render() {
		return (
			<div>
				<p>Today you have pee’d</p>
				<p className="counter-number">{this.props.counter}</p>
				<p>times.</p>
				<button onClick={this.handleClick.bind(this)}>I pee’d</button>
			</div>
		);
	}
}

Counter.propTypes = {
	counter: PropTypes.number.isRequired,
	actions: PropTypes.object.isRequired
};

export default Counter;
