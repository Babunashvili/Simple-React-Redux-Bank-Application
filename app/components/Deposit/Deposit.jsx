import React, { Component, PropTypes } from 'react'
import constants from '../../constants'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import Panel from 'react-bootstrap/lib/Panel'
import { checkEmptyAmount, checkAmountQty } from '../../services/validation'

class Deposit extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: ''
		}
	}

	/**
	 * Handle Deposit Input Changes
	 */
	onChangeHandle(e){
		this.setState({value: e.target.value, permission: true})
	}
	/**
	 * Handle Deposit Form Submit
	 */
	getAmount(e){
		e.preventDefault()
		if(checkEmptyAmount(this.state.value)){
			//If Deposit Amount Is Not Empty
			if(checkAmountQty(this.state.value)){
				//If Deposit Amount > 0
                this.props.handleDeposit(this.state.value, this.state.permission)
				this.setState({
					value: ''
				}) 
				this.props.handleAlert(constants.ALERT.SUCCESS_DEPOSIT_MSG,'success')
			}else{
				//If Deposit Amount <= 0
				this.props.handleAlert(constants.ALERT.NULL_DEPOSIT_MSG,'danger')
			}
		}else{
			//If Deposit Amount Is Empty
			this.props.handleAlert(constants.ALERT.EMPTY_DEPOSIT_MSG,'danger') 
		}
	}

	render() {
		return (
			<div>
				<Panel header="Deposit into your Balance">
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
						<Button onClick={this.getAmount.bind(this)} type="submit" bsStyle="default">Submit</Button>
					</FormGroup>
				 </form>
			    </Panel>
			</div>
		)
	}
}

/**
 * Add Deposit Component PropTypes
 */
Deposit.propTypes = {
	handleDeposit: React.PropTypes.func,
	handleAlert: React.PropTypes.func
}

export default Deposit