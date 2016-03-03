import React, { Component, PropTypes } from 'react';

class Counter extends Component {
	handleClick() {
		this.props.actions.increment();
	}
	render() {
		return (
			<div>
				<p>{this.props.counter}</p>
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
