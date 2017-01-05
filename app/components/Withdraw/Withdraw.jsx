import React, { Component, PropTypes } from "react"

import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import Panel from 'react-bootstrap/lib/Panel'

import { checkBalance } from '../../services/validation'
import { checkEmptyAmount } from '../../services/validation'
import { checkAmountQty } from '../../services/validation'

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
		e.preventDefault()
		if(checkEmptyAmount(this.state.value)){
			if(checkAmountQty(this.state.value)){
                if(checkBalance(this.state.value,this.props.balance)){
	                this.props.handleWithdraw(this.state.value, this.state.permission)
					this.setState({
						value: ''
					})
			    }else{
				  console.log('You dont have enough money for withdraw!')
		     	}
			}else{
				console.log('Withdrow amount must be > 0')
			}
		}else{
			console.log('Withdrow Amount is required!') 
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
	handleWithdraw: React.PropTypes.func
}

export default Withdraw