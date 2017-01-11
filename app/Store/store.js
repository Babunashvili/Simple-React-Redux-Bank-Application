import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers/index'
import axios from 'axios'

/**
 * Create Bank Store
 *
 * @type       {Function}
 */
const middleware = applyMiddleware(thunk)
const store = createStore(reducers,middleware)

store.dispatch((dispatch) => {
   axios.post('http://192.168.0.150:2304/bank-api/public/fetch').then((response) => {
   	  dispatch({type:'FETCH_DATA',payload:response.data})
   })
})

export default store