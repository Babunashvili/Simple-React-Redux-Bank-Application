import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/lib/Button'
import Widthdraw from './Withdraw/Withdraw'
import Deposit from './Deposit/Deposit'
import Header from './Header/Header'
import History from './History/History'
import { alertMessage } from '../services/alerts'


import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import Grid from 'react-bootstrap/lib/Grid'
import { hiddenCard } from '../services/hideCard'

import fetchAction from '../actions/fetchAction'

class App extends Component { 
	constructor(props){
		super(props)
		this.state = {
			transaction: {},
			alert:[]
		}
		this.handleAlert =this.handleAlert.bind(this)
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

	componentWillMount() {
		
	}
	
  render() {
    return (

    	<div>
    		<Header />
	        <div className="container">
                 { alertMessage(...this.state.alert) }
		        	<Row>
			        	<Col lg={6} md={6} sm={12}>
			        		<Widthdraw handleAlert={this.handleAlert} />
			        	</Col>
			          	<Col lg={6} md={6} sm={12}>
			        		<Deposit handleAlert={this.handleAlert}  />
			        	</Col>
			        	<Col lg={12} md={12} sm={12}>
			        		<History />
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