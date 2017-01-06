import { createStore } from 'redux'
import BankReducer from '../reducers/BankReducer'
/**
 * Create Bank Store
 *
 * @type       {Function}
 */
const BankStore = createStore(BankReducer)

export default BankStore