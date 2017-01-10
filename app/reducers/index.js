
import { combineReducers } from 'redux'
import Transaction from './Transaction'
import Withdraw from './Withdraw'
import Deposit from './Deposit'


export default combineReducers({
	transaction: Transaction,
	withdraw: Withdraw,
	deposit: Deposit
})