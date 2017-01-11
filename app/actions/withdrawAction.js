

const handleWithdraw = (amount) => {
	return {
		type: 'WITHDRAW_FROM_ACCOUNT',
		payload: {
			amount: amount
		}
	}


}

export default handleWithdraw 