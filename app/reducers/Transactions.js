import constants from '../constants'

import axios from 'axios'


const InitialState = {
    balance: 0,
    transactions: [],
    cards:[]
}

const Deposit = (state = InitialState, action) => {

    switch (action.type) {
        case constants.DEPOSIT_INTO_ACCOUNT:
            //If Action Is Deposit Request
            
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
            return Object.assign({}, state, {
                balance: state.balance + parseFloat(action.payload.amount),
                cards:cards
            })
        case constants.WITHDRAW_FROM_ACCOUNT:
            //If Action Is Withdraw Request
            return Object.assign({}, state, {
                balance: state.balance - parseFloat(action.payload.amount)
            })
        case constants.FETCH_DATA:
            
            return Object.assign({}, state, action.payload)

        default:
            return state
    }

}

 
export default Deposit