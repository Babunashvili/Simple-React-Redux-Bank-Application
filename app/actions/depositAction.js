import transAction from './transAction'

const handleDeposit = (amount, card) => {
	transAction(amount, "Deposit into account", "+")
	return {
		type: 'DEPOSIT_INTO_ACCOUNT',
		payload: {
			amount: amount,
			card: card
		}
	}


}

export default handleDeposit 