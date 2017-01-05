import { createStore } from 'redux'
import BankReducer from '../reducers/BankReducer'

const BankStore = createStore(BankReducer)

export default BankStore