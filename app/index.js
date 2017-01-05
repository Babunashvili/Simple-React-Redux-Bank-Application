import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import BankStore from './Store/BankStore'
import constants from './constants'

const render = () => {
	ReactDOM.render(
	  <App
	   balance={BankStore.getState().balance}
	   transactions={BankStore.getState().transactions}
	   onDeposit={(amount) => {BankStore.dispatch({type: constants.DEPOSIT_INTO_ACCOUNT, amount: amount})}}
	   onWithdraw={(amount) => {BankStore.dispatch({type: constants.WITHDRAW_FROM_ACCOUNT, amount: amount})}}
	   onTransaction={(transObj) => {BankStore.dispatch({transaction: transObj, type:constants.ON_TRANSACTION})}}
	   />,
	  document.getElementById('root')
	)
}
BankStore.subscribe(render)
render()
