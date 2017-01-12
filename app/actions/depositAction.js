import transAction from './transAction'
import store from '../Store/store'

import axios from 'axios' 

const handleDeposit = (amount, card) => {
	// transAction(amount, "Deposit into account", "+")
	
	return {
		type: 'DEPOSIT_INTO_ACCOUNT',
		payload: {
			amount: amount,
			card: card
		}
	}

}

export default handleDeposit