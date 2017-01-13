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
            return Object.assign({}, state, action.payload
              
            )
            
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