import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button'
import Widthdraw from './Withdraw/Withdraw'
import Deposit from './Deposit/Deposit'
import Header from './Header/Header'
import History from './TransactionHistory/History'


// bootstrap components

import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import Grid from 'react-bootstrap/lib/Grid'


class App extends Component {
	constructor(props){
		super(props)

		this.handleDeposit = this.handleDeposit.bind(this)
		this.handleWithdraw =this.handleWithdraw.bind(this)
	}

	handleDeposit(amount, permission){
		if(permission === true){
			this.props.onDeposit(amount)
		}
		
	}
	handleWithdraw(amount, permission){
		
		if(permission === true){
			this.props.onWithdraw(amount)
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
			        		<History />
			        	</Col>
			        </Row>
			    </Grid>	
	        </div>
	    </div>
    )
  }
}

export default App;