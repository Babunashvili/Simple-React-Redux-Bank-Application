import constants from '../constants'


const InitialState = {
    balance: 0,
    transactions: [],
    cards:[
     
    ]
}
/**
 * Create Transaction Reducer
 *
 * @class      Transaction (state,action)
 * @param      {OBject}  state   The state
 * @param      {Object}  action  The action
 * @return     {Object}  { returns updated state object }
 */
  
const Transaction = (state = InitialState, action) => {

    switch (action.type) {
        case constants.ON_TRANSACTION:
            console.log(action)
            //If Action Is Transaction
            let array = [...state.transactions]
            array.push(action.payload)
            console.log(array)
            return Object.assign({}, state, {
                transactions: array
            })
        case constants.FETCH_DATA:
            return Object.assign({}, state, action.payload)
        default:
            return state
    }

}

export default Transaction