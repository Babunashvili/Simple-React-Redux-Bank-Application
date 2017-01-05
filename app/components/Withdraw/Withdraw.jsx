import React, { Component } from "react"

import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'

class Withdraw extends Component {

	constructor(props) {
		super(props)
		
	}
	onChangeHandle(e){
		
		this.setState({value: e.target.value, permission: true})

	}
	getAmount(e){
		e.preventDefault()
		this.props.handleWithdraw(this.state.value, this.state.permission)
	}

	render() {
		return (

			<div className="well">

				<h3 className="text-center">Withdraw</h3>
				<hr/>
				<form>
					<FormGroup>

						<ControlLabel> Withdraw Amount: </ControlLabel>
						<FormControl

							type="number"
							placeholder="Enter amount"
							onChange={this.onChangeHandle.bind(this)}

						/>

					</FormGroup>

					<FormGroup>
						<Button onClick={this.getAmount.bind(this)} type="submit" bsStyle="primary">Submit</Button>
					</FormGroup>
				</form>
			</div>

		)
	}
}


export default Withdraw