import React, { Component, PropTypes } from 'react'

class EmptyHistory extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				{this.props.message}
			</div>
		)
	}
}
/**
 * Add EmptyHistory Component PropTypes
 */
EmptyHistory.propTypes = {
	message: React.PropTypes.string,
}
export default EmptyHistory