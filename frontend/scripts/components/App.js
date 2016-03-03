import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';
import Counter from './Counter';

class App extends Component {
	render() {
		const { counter, actions } = this.props;
		return (
			<div>
				<Counter counter={counter} actions={actions}/>
			</div>
		);
	}
}

App.propTypes = {
	counter: PropTypes.number.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
