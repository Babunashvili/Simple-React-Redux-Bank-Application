import dateFormat from 'dateformat'
import { randomString } from '../services/randomGenerator'
const transAction = (amount, desc, mark) => {
	console.log(amount)
	var date = dateFormat(new Date(), "dd-mm-yyyy h:MM:ss TT")
	let obj = {
		trans_id: randomString(8),
		date: date.toString(),
		amount: `${mark}${amount}`,
		description: desc
	}
	return {
		type: 'ON_TRANSACTION',
		payload: obj
	}
}

export default transAction