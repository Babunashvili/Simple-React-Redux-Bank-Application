import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers/index'
import axios from 'axios'
import promise from 'redux-promise'

/**
 * Create Bank Store
 *
 * @type       {Function}
 */
const middleware = applyMiddleware(thunk)
const store = createStore(reducers, middleware)

//Fetch Data From API
store.dispatch((dispatch) => {
   axios.get('https://react-redux-api-bd6df.firebaseio.com/react-redux.json').then((response) => {
   	  var transactions = (response.data.transactions === "NULL") ? [] : response.data.transactions
      response.data.transactions = transactions
   	  dispatch({type:'FETCH_DATA',payload:response.data})
   })
})


store.subscribe(() => {
	let state = store.getState()
})


export default store