import transAction from './transAction'
import store from '../Store/store'

import axios from 'axios'

const API_URL = 'http://192.168.0.150:2304/bank-api/public/fetch'

const fetchAction = () => {
	
	axios.post(API_URL).then((data) => {
		return {
			type: 'FETCH_DATA',
			payload: data.data
		}
	})



}

export default fetchAction