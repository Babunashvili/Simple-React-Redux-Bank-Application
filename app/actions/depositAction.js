import transAction from './transAction'
import store from '../Store/store'

import axios from 'axios' 

const handleDeposit = (amount, card) => {
	// transAction(amount, "Deposit into account", "+")


	axios.post('http://192.168.0.150:2304/bank-api/public/deposit',{amount: amount, card_id: card}).then((response) => {

		if (response.data.status === 'ok') {
			return {
				type: 'DEPOSIT_INTO_ACCOUNT',
				payload: {
					amount: amount,
					card: card
				}
			}
		} else {
			console.log(respone.data.msg)
		}

	})

		


}

export default handleDeposit 