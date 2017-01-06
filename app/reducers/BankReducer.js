import constants from '../constants'


const InitialState = {
    balance: 0,
    transactions: [],
    cards:[
      { 
        key:'343433434',
        balance:100,
        card: {number:'1234-5678-2345-7890',expires:'05.12.2017',cvc:'123'}
      },
      { 
        key:'466433546',
        balance:1600,
        card: {number:'2456-2246-9524-2252',expires:'08.11.2017',cvc:'785'}
      }
    ]
}

/**
 * Create Bank Reducer
 *
 * @class      BankReducer (state,action)
 * @param      {Onject}  state   The state
 * @param      {Object}  action  The action
 * @return     {Object}  { returns updated state object }
 */
const BankReducer = (state = InitialState, action) => {

    switch (action.type) {
        case constants.DEPOSIT_INTO_ACCOUNT:
        //If Action Is Deposit Request
            return Object.assign({}, state, {
                balance: state.balance + parseFloat(action.amount)
            })
        case constants.WITHDRAW_FROM_ACCOUNT:
        //If Action Is Withdraw Request
            return Object.assign({}, state, {
                balance: state.balance - parseFloat(action.amount)
            })

        case constants.ON_TRANSACTION:
        //If Action Is Transaction
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