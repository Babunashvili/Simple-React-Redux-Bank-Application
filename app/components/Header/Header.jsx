import React, { Component } from "react"

import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'

class Header extends Component {
	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">Bank App</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Navbar.Text pullRight>
					Balance <span>{this.props.balance}</span>$
				</Navbar.Text>
			</Navbar>
		)
	}
}


export default Header