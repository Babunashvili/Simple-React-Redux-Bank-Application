import transAction from './transAction'
import store from '../Store/store'

import axios from 'axios'
import {
    randomString
} from '../services/randomGenerator'
import dateFormat from 'dateformat'


const withdrawAction = (amount) => {
    let date = dateFormat(new Date(), "dd-mm-yyyy h:MM:ss TT").toString()


    store.dispatch((dispatch) => {
        axios.get('https://react-redux-api-bd6df.firebaseio.com/react-redux.json').then((response) => {
            var data = response.data
            var transactions = (response.data.transactions === "NULL") ? [] : response.data.transactions
            data.transactions = transactions
            data.balance = data.balance - amount

            transactions.push({
                amount: '-' + amount,
                date: date,
                description: 'Withdraw From Balance.',
                trans_id: 'PAY-' + randomString(8)
            })

            axios.put('https://react-redux-api-bd6df.firebaseio.com/react-redux.json', data).then((res) => {
                console.log('Call Withdraw Action POST...')
                dispatch({
                    type: 'WITHDRAW_FROM_ACCOUNT',
                    payload: res.data
                })
            })
        })
    })
}

export default withdrawAction