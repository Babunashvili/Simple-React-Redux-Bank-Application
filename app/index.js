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
	   cards={BankStore.getState().cards}
	   onDeposit={(amount,card) => {BankStore.dispatch({type: constants.DEPOSIT_INTO_ACCOUNT, amount: amount, card:card})}}
	   onWithdraw={(amount) => {BankStore.dispatch({type: constants.WITHDRAW_FROM_ACCOUNT, amount: amount})}}
	   onTransaction={(transObj) => {BankStore.dispatch({transaction: transObj, type:constants.ON_TRANSACTION})}}
	   />,
	  document.getElementById('root')
	)
}
/**
 * Subscribe Store Changes
 */
BankStore.subscribe(render)

render()
