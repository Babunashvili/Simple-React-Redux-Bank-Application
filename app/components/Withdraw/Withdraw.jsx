import React, { Component, PropTypes } from 'react'
import constants from '../../constants'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import Panel from 'react-bootstrap/lib/Panel'
import { checkBalance, checkEmptyAmount, checkAmountQty } from '../../services/validation'

class Withdraw extends Component {
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
		// e.preventDefault()
		if(checkEmptyAmount(this.state.value)){
			if(checkAmountQty(this.state.value)){
                if(checkBalance(this.state.value,this.props.balance)){
	                this.props.handleWithdraw(this.state.value, this.state.permission)
					this.setState({
						value: ''
					})
					this.props.handleAlert(constants.ALERT.SUCCESS_WITHDRAW_MSG,'success')
			    }else{
			    	this.props.handleAlert(constants.ALERT.NOT_ENOUGH_WITHDRAW_MSG,'danger')
		     	}
			}else{
				this.props.handleAlert(constants.ALERT.NULL_WITHDRAW_MSG,'danger')
			}
		}else{
			this.props.handleAlert(constants.ALERT.EMPTY_WITHDRAW_MSG,'danger') 
		}
	}

	render() {
		return (
			<div>
			    <Panel header="Withdraw From Your Balance">
			      <form>
						<FormGroup>
							<ControlLabel> Withdraw Amount: </ControlLabel>
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

Withdraw.propTypes = {
	handleWithdraw: React.PropTypes.func,
	handleAlert: React.PropTypes.func
}

export default Withdraw