import constants from '../constants'
import store from '../Store/store'
import axios from 'axios'
import {
    randomString
} from '../services/randomGenerator'
import dateFormat from 'dateformat'

const InitialState = {
    balance: 0,
    transactions: [],
    cards: []
}

const Transactions = (state = InitialState, action) => {

    switch (action.type) {
        case constants.DEPOSIT_INTO_ACCOUNT:
            //If Action Is Deposit Request

            console.log('Call Deposit Action...')
            return Object.assign({}, state, action.payload)

        case constants.WITHDRAW_FROM_ACCOUNT:

            // If Action Is Withdraw Request
            console.log('Call Withdraw Action...')
            return Object.assign({}, state, action.payload)

        case constants.FETCH_DATA:

            return Object.assign({}, state, action.payload)

        default:
            return state
    }

}

export default Transactions