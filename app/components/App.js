import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button'
import Widthdraw from './Withdraw/Withdraw'
import Deposit from './Deposit/Deposit'
import Header from './Header/Header'
import History from './TransactionHistory/History'

var dateFormat = require('dateformat')

// bootstrap components

import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import Grid from 'react-bootstrap/lib/Grid'


class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			transaction: {}
		}
		this.handleDeposit = this.handleDeposit.bind(this)
		this.handleWithdraw =this.handleWithdraw.bind(this)
	}

	createTransaction(amount, desc, mark) {
		
		var date = dateFormat(new Date(), "d-mm-yyyy h:MM:ss TT")
		

		let obj = {
			date: date.toString(),
			amount: `${mark}${amount}`,
			description: desc
		}
		
		this.props.onTransaction(obj)
		
	}

	handleDeposit(amount, permission){
		if(permission === true){
			
			this.props.onDeposit(amount)
			this.createTransaction(amount, "Deposit into account", "+") 
			
		}
		
	}
	handleWithdraw(amount, permission){
		
		if(permission === true){
			
			this.props.onWithdraw(amount)
			this.createTransaction(amount, "Withdraw from account", "-")
		}
	}
	
  render() {
    return (
    	<div>
    		<Header balance={this.props.balance} />
	        <div className="container">
	        	<Grid>
		        	<Row>
			        	<Col lg={6} md={6} sm={12}>
			        		<Widthdraw handleWithdraw={this.handleWithdraw} />
			        	</Col>
			          	<Col lg={6} md={6} sm={12}>
			        		<Deposit handleDeposit={this.handleDeposit} />
			        	</Col>
			        	<Col lg={12} md={12} sm={12}>
			        		<History trans={this.props.transactions} />
			        	</Col>
			        </Row>
			    </Grid>	
	        </div>
	    </div>
    )
  }
}

export default App;