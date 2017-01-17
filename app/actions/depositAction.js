import transAction from './transAction'
import store from '../Store/store'

import axios from 'axios'
import {
    randomString
} from '../services/randomGenerator'
import dateFormat from 'dateformat'

const depositAction = (amount, card) => {
    let date = dateFormat(new Date(), "dd-mm-yyyy h:MM:ss TT").toString()

    
    store.dispatch((dispatch) => {

        axios.get('https://react-redux-api-bd6df.firebaseio.com/react-redux.json').then((response) => {
        	var data = response.data

            for (var i = 0; i <= data.cards.length - 1; i++) {
               
                if (data.cards[i].key === card) {
                    let cardBalance = data.cards[i].balance - amount
                    let newCard = {
                        key: data.cards[i].key,
                        balance: cardBalance,
                        card: {
                            number: data.cards[i].card.number,
                            expires: data.cards[i].card.expires,
                            cvc: data.cards[i].card.cvc
                        }
                    }
                    var cards = data.cards
                    cards[i] = newCard
                }
            }
            var transactions = (response.data.transactions === "NULL") ? [] : response.data.transactions
            data.transactions = transactions
            data.balance = parseInt(data.balance) + parseInt(amount)
            transactions.push({
                amount: '+' + amount,
                date: date,
                description: 'Deposit Into Balance.',
                trans_id: 'PAY-' + randomString(8)
            })
            data.cards = cards
            axios.put('https://react-redux-api-bd6df.firebaseio.com/react-redux.json', data).then((res) => {
                console.log('Call Deposit Action POST...')
                dispatch({
                    type: 'DEPOSIT_INTO_ACCOUNT',
                    payload: res.data
                })
            })
        })
    })
}

export default depositAction