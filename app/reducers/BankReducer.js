import constants from '../constants'


const InitialState = {
    balance: 0
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

        default:
            return state
    }

}

export default BankReducer