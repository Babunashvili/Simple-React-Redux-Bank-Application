import React from 'react'
import { shallow } from 'enzyme'

import App from '../app/components/App'
import History from '../app/components/History/History'
import Header from '../app/components/Header/Header'
import Deposit from '../app/components/Deposit/Deposit'
import Withdraw from '../app/components/Withdraw/Withdraw'

// Bank Store 
import BankStore from '../app/Store/BankStore'



describe('App component Testing', () => {
	const wrapper = shallow(<App balance={BankStore.getState().balance} />)
	test('App Component Rendered', () => {
		expect(wrapper.length).toBe(1)
	})
	test('Check if transactions state defined', () => {
		expect(wrapper.state().transaction).toBeDefined()
	})
	test('Check if balance props exist', () => {
		expect(wrapper.instance().props.balance).toEqual(0)
	})
	
})

describe('Deposit component Testing', () => {
	const wrapper = shallow(<Deposit />)
	test('Deposit Component Rendered', () => {
		expect(wrapper.length).toBe(1)
	})
	test('Check if value state defined', () => {
		expect(wrapper.state().value).toBeDefined()
	})
	// test('Deposit getState', () => {
	// 	let state = BankStore.getState()
	// 	wrapper.setProps({handleAlert: (msg, type) => {
	// 		wrapper.parent().setState({
	// 			 alert: [msg,type]
	// 		})
	// 	}})
	// 	wrapper.find('Button').simulate('click')
	// 	expect(state.balance).toBe(wrapper.state().value)
	// })

})

describe('Header component Testing', () => {
	const wrapper = shallow(<Header />)
	test('Header Component Rendered', () => {
		expect(wrapper.length).toBe(1)
	})
})

describe('Withdraw component Testing', () => {
	test('Withdraw Component Rendered', () => {
		const wrapper = shallow(<Withdraw/>)
		expect(wrapper.length).toBe(1)
	})
})

describe('History component Testing', () => {
	// test('History Component Rendered', () => {
	// 	const wrapper = shallow(<History/>)
	// 	expect(wrapper.length).toBe(1)

	// })

})
describe('Store state Testing', () => {
	test('Check if get states from store', () => {
		let state = BankStore.getState()
		expect(state).toEqual({balance: 0, transactions: []})
	})
})





