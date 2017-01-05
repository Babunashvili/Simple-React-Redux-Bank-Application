import React, { Component } from "react"

import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'

class Deposit extends Component {
	render() {
		return (

			<div className="well">

				<h3 className="text-center">Deposit</h3>
				<hr/>
				<form>
					<FormGroup>

						<ControlLabel> Deposit Amount: </ControlLabel>
						<FormControl

							type="number"
							placeholder="Enter amount"


						/>

					</FormGroup>

					<FormGroup>
						<Button type="submit" bsStyle="primary">Submit</Button>
					</FormGroup>
				</form>
			</div>

		)
	}
}


export default Deposit