let actions = {
	increment: () => {
		return {
			type: 'INCREMENT_COUNTER'
		};
	},
	decrement: () => {
		return {
			type: 'DECREMENT_COUNTER'
		};
	}
};

export default actions;
