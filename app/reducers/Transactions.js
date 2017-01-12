import constants from '../constants'
import store from '../Store/store'
import axios from 'axios'
import { randomString } from '../services/randomGenerator'
import dateFormat from 'dateformat'

const InitialState = {
    balance: 0,
    transactions: [],
    cards:[]
}

const Transactions = (state = InitialState, action) => {

    switch (action.type) {
        case constants.DEPOSIT_INTO_ACCOUNT:
            //If Action Is Deposit Request

            console.log('Call Deposit Action...')
            var date = dateFormat(new Date(), "dd-mm-yyyy h:MM:ss TT").toString()
            for (var i = 0; i <= state.cards.length - 1; i++) {
                if(state.cards[i].key === action.payload.card){
                   let cardBalance = state.cards[i].balance - action.payload.amount
                   let newCard = {key:state.cards[i].key,balance:cardBalance,card: {
                     number:state.cards[i].card.number,
                     expires:state.cards[i].card.expires,
                     cvc:state.cards[i].card.cvc
                   }}
                   var cards = state.cards
                   cards[i] = newCard
                }
            }
            store.dispatch((dispatch) => {
               axios.get('https://react-redux-api-bd6df.firebaseio.com/react-redux.json').then((response) => {
                  var data = response.data
                  console.log(action)
                  var transactions = (response.data.transactions === "NULL") ? [] : response.data.transactions
                  data.transactions = transactions
                  data.balance = parseInt(data.balance) + parseInt(action.payload.amount)
                  transactions.push({
                     amount: '+' + action.payload.amount,
                     date: date,
                     description:'Deposit Into Balance.',
                     trans_id: 'PAY-'+randomString(8)
                  })

                  data.cards = cards
                  axios.put('https://react-redux-api-bd6df.firebaseio.com/react-redux.json',data).then((res) => {
                     console.log('Call Deposit Action POST...')
                     dispatch({type:'FETCH_DATA',payload:res.data})
                  })
               })
            })
            break
             
        case constants.WITHDRAW_FROM_ACCOUNT:

            // If Action Is Withdraw Request
            console.log('Call Withdraw Action...')
            var date = dateFormat(new Date(), "dd-mm-yyyy h:MM:ss TT").toString()
            store.dispatch((dispatch) => {
               axios.get('https://react-redux-api-bd6df.firebaseio.com/react-redux.json').then((response) => {
                  var data = response.data
                  var transactions = (response.data.transactions === "NULL") ? [] : response.data.transactions
                  data.transactions = transactions
                  data.balance = data.balance-action.payload.amount

                  transactions.push({
                     amount: '-' + action.payload.amount,
                     date: date,
                     description: 'Withdraw From Balance.',
                     trans_id: 'PAY-'+randomString(8)
                  })

                  axios.put('https://react-redux-api-bd6df.firebaseio.com/react-redux.json',data).then((res) => {
                     console.log('Call Withdraw Action POST...')
                     dispatch({type:'FETCH_DATA',payload:res.data})
                  })
               })
            })
            break
        case constants.FETCH_DATA:
            
            return Object.assign({}, state, action.payload)

        default:
            return state
    }

}
 
export default Transactions