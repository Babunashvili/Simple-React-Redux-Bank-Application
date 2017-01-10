
const handleDeposit = (amount, card) => {
	console.log(amount)
	return {
		type: 'DEPOSIT_INTO_ACCOUNT',
		payload: {
			amount: amount,
			card: card
		}
	}


}

export default handleDeposit 