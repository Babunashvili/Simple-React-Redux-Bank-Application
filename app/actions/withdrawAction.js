

const handleWithdraw = (amount) => {
	console.log(amount)
	return {
		type: 'WITHDRAW_FROM_ACCOUNT',
		payload: {
			amount: amount
		}
	}


}

export default handleWithdraw 