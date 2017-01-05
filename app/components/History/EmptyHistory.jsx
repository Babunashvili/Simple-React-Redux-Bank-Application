import React, { Component, PropTypes } from "react"

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

export default EmptyHistory