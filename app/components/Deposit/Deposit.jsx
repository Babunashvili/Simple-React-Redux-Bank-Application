import React, { Component } from "react"

import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'

class Deposit extends Component {

	constructor(props) {
		super(props)
		this.state = {
			value: ''
		}
	}
	onChangeHandle(e){
		
		this.setState({value: e.target.value, permission: true})

	}
	getAmount(e){
		e.preventDefault()
		this.props.handleDeposit(this.state.value, this.state.permission)
		this.setState({
			value: ''
		})
	}

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
							value={this.state.value}
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


export default Deposit