import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import constants from '../../constants'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import Panel from 'react-bootstrap/lib/Panel'

import handleDeposit from '../../actions/depositAction'

import { checkEmptyValue, checkAmountQty, checkCardBalance } from '../../services/validation'

class Deposit extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: '',
			card:'',
			depositObject: {}
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
		if(checkEmptyValue(this.state.value)){
			//If Deposit Amount Is Not Empty
			if(checkEmptyValue(this.state.card)){
	            //If Credit Card Is Selected
				if(checkCardBalance(this.state.value,this.state.card)){
				  //If Requested Amount <= Credit Card Balance
                  if(checkAmountQty(this.state.value)){
						//If Deposit Amount > 0
						
		                handleDeposit(this.state.value, this.state.card)
						this.setState({
							value: ''
						}) 
						this.props.handleAlert(constants.ALERT.SUCCESS_DEPOSIT_MSG,'success')
					}else{
						//If Deposit Amount <= 0
						this.props.handleAlert(constants.ALERT.NULL_DEPOSIT_MSG,'danger')
					}
				}else{
                   //If Is Not Enough Money On Card
					this.props.handleAlert(constants.ALERT.NOT_ENOUGH_BALANCE_ON_CARD_MSG,'danger')
				}
			}else{
               this.props.handleAlert(constants.ALERT.CARD_NOT_SELECTED,'danger')
			}
		}else{
			//If Deposit Amount Is Empty
			this.props.handleAlert(constants.ALERT.EMPTY_DEPOSIT_MSG,'danger') 
		}
	}
    /**
	 * Handle Deposit Card Change
	 */
	handleCardChange(e){
        this.setState({
        	card: parseInt(e.target.value)
        })
	}

	render() {
		return (
			<div>
				<Panel header="Deposit into your Balance">
			      <form>
					<Row>
	                     <Col md={6}>
	                       <FormGroup>
							<ControlLabel> Deposit Amount: </ControlLabel>
							<FormControl
								type="number"
								placeholder="Enter amount"
								value={this.state.value}
								onChange={this.onChangeHandle.bind(this)}
							/>
						  </FormGroup>
						</Col>
						<Col md={6}>
	                       <FormGroup>
							<ControlLabel> Choose Credit Card: </ControlLabel>
							<FormControl componentClass="select" placeholder="Choose Credit Card" onChange={this.handleCardChange.bind(this)}>
						        <option value=""></option>
						        {this.props.cards.map((value,key) => {
						        	return <option key={key} value={value.key}>{value.card.number} ({value.balance} USD)</option>
						        })}
						     </FormControl>
						  </FormGroup>
						</Col>
					</Row>
					<FormGroup>
						<Button onClick={this.getAmount.bind(this)} onClick={this.props.buttonClicked} type="submit" bsStyle="default">Submit</Button>
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


const stateProps = (state) => {
	return {
		cards: state.transactions.cards
	}
}

// const dispatchtToProps = (dispatch) => {
// 	return bindActionCreators({
// 		handleDeposit: handleDeposit
// 	}, dispatch)
// } 

export default connect(stateProps)(Deposit)