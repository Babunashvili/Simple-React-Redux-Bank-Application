
import { combineReducers } from 'redux'
import Transactions from './Transactions'

import History from './History'


export default combineReducers({
	transactions: Transactions,
	history: History
})