import constants from '../constants'


const InitialState = {
    balance: 0,
    transactions: []
}


const BankReducer = (state = InitialState, action) => {

    switch (action.type) {
        case constants.DEPOSIT_INTO_ACCOUNT:
            return Object.assign({}, state, {
                balance: state.balance + parseFloat(action.amount)
            })
        case constants.WITHDRAW_FROM_ACCOUNT:
            return Object.assign({}, state, {
                balance: state.balance - parseFloat(action.amount)
            })

        case constants.ON_TRANSACTION:
            let array = [...state.transactions]
            array.push(action.transaction)
            return Object.assign({}, state, {
                transactions: array
            })

        default:
            return state
    }

}

export default BankReducer