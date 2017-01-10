import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import Label from 'react-bootstrap/lib/Label'

class Header extends Component {
	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">Simple Bank Application</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Navbar.Text pullRight>
					Your balance is <Label bsStyle="primary">{this.props.balance} USD</Label> &nbsp;&nbsp;&nbsp;
				</Navbar.Text>
			</Navbar>
		)
	}
}
/**
 * Add Header Component PropTypes
 */
Header.propTypes = {
	balance: React.PropTypes.number
}

const stateProps = (state) => {
	return {
		balance: state.deposit.balance
	}
} 

export default connect(stateProps)(Header)