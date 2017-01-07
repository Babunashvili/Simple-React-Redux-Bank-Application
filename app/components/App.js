import React, { Component } from 'react'
import Button from 'react-bootstrap/lib/Button'
import Widthdraw from './Withdraw/Withdraw'
import Deposit from './Deposit/Deposit'
import Header from './Header/Header'
import History from './History/History'
import { alertMessage } from '../services/alerts'
import dateFormat from 'dateformat'
import { randomString } from '../services/randomGenerator'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import Grid from 'react-bootstrap/lib/Grid'
import { hiddenCard } from '../services/hideCard'

class App extends Component { 
	constructor(props){
		super(props)
		this.state = {
			transaction: {},
			alert:[]
		}
		this.handleDeposit = this.handleDeposit.bind(this)
		this.handleWithdraw =this.handleWithdraw.bind(this)
		this.handleAlert =this.handleAlert.bind(this)
	}
    
    /**
     * Creates a transaction object.
     *
     * @param      {Int}  amount  The amount
     * @param      {String}  desc    The description
     * @param      {String}  mark    The mark
     */
	createTransaction(amount, desc, mark) {
		var date = dateFormat(new Date(), "dd-mm-yyyy h:MM:ss TT")
		let obj = {
			trans_id: randomString(8),
			date: date.toString(),
			amount: `${mark}${amount}`,
			description: desc
		}
		this.props.onTransaction(obj)
	}
    /**
     * Handles Deposit Requests
     *
     * @param      {Int}   amount      The amount
     * @param      {Boolean}  permission  The permission
     */
	handleDeposit(amount, permission,card){
		if(permission === true){
			this.props.onDeposit(amount,card)
			this.createTransaction(amount, "Deposit into account", "+") 	
		}
	}
	/**
     * Handles Withdraw Requests
     *
     * @param      {Int}   amount      The amount
     * @param      {Boolean}  permission  The permission
     */
	handleWithdraw(amount, permission){
		if(permission === true){
			this.props.onWithdraw(amount)
			this.createTransaction(amount, "Withdraw from account", "-")
		}
	}
    /**
     * Handles Alert Messages
     *
     * @param      {String}  msg     The message
     * @param      {Sring}  type    The type
     */
	handleAlert(msg,type){
		this.setState({
           alert:[msg,type]
		})
	}
	
  render() {
    return (
    	<div>
    		<Header balance={this.props.balance} />
	        <div className="container">
                 { alertMessage(...this.state.alert) }
		        	<Row>
			        	<Col lg={6} md={6} sm={12}>
			        		<Widthdraw handleAlert={this.handleAlert} handleWithdraw={this.handleWithdraw} balance={this.props.balance} />
			        	</Col>
			          	<Col lg={6} md={6} sm={12}>
			        		<Deposit handleAlert={this.handleAlert} handleDeposit={this.handleDeposit} cards={hiddenCard(this.props.cards)} />
			        	</Col>
			        	<Col lg={12} md={12} sm={12}>
			        		<History trans={this.props.transactions} />
			        	</Col>
			        </Row>	
	        </div>
	    </div>
    )
  }
}
/**
 * Add App Component PropTypes
 */
App.propTypes = {
	balance: React.PropTypes.number,
	transactions: React.PropTypes.array,
}
export default App;