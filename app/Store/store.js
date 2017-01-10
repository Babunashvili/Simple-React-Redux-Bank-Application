import { createStore } from 'redux'
import reducers from '../reducers/index'
/**
 * Create Bank Store
 *
 * @type       {Function}
 */
const store = createStore(reducers)

export default store