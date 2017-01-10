
const handleDeposit = (obj) => {

	console.log(obj.amount)
	return {
		type: 'DEPOSIT_INTO_ACCOUNT',
		payload: obj
	}


}

export default handleDeposit 