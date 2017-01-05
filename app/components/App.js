import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button'
import Widthdraw from './Withdraw/Withdraw'
import Deposit from './Deposit/Deposit'
import Header from './Header/Header'

class App extends Component {

  render() {
    return (
    	<div>
    		<Header />
	        <div className="container">

	          	<Widthdraw />
	          	<Deposit />
	        </div>
	    </div>
    )
  }
}

export default App;