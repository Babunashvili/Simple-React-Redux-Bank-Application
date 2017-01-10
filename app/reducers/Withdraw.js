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

const Withdraw = (state = InitialState, action) => {

    switch (action.type) {
        case constants.WITHDRAW_FROM_ACCOUNT:
            //If Action Is Withdraw Request
            return Object.assign({}, state, {
                balance: state.balance - parseFloat(action.amount)
            })
        default:
            return state
    }

}



export default Withdraw