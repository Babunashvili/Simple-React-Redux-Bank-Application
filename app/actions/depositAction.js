import transAction from './transAction'
import store from '../Store/store'

import axios from 'axios'



const handleDeposit = (amount, card) => {
	let db = axios.post('http://192.168.0.150:2304/bank-api/public/fetch')

	db.then((data) => {
	  console.log('jima')
	  console.log(data)
	})
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