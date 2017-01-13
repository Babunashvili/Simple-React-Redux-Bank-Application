import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Deposit from '../app/components/Deposit/Deposit'

// Bank Store 
import BankStore from '../app/Store/store'

// constant file
import constants from '../app/constants'

// Service files

import { alertMessage } from '../app/services/alerts'




describe('Deposit component Testing', () => {
	var buttonClicked = sinon.spy()
	const wrapper = mount(
		<Provider store={BankStore}>
			<Deposit cards={BankStore.getState().cards} buttonClicked={buttonClicked} />
		</Provider>
		)
	wrapper.setProps({
		handleAlert: alertMessage
	})
	test('Deposit Component Rendered', () => {
		expect(wrapper.length).toBe(1)
	})
	// test('Check if value state defined', () => {
	// 	expect(wrapper.state().value).toBeDefined()
	// })
	// test('Check if card state defined', () => {
	// 	expect(wrapper.state().card).toBeDefined()
	// })
	// test('Deposit checked 10$ add in ', () => {
	// 	let state = BankStore.getState()
	// 	expect(state.balance).toEqual(10)
	// })
	test('Check if button Clicked', () => {
		wrapper.find('Button').simulate('click')
		expect(buttonClicked.calledOnce).toEqual(true);

	})

})