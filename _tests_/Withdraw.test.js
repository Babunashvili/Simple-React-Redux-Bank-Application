import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Withdraw from '../app/components/Withdraw/Withdraw'

// Bank Store 
import BankStore from '../app/Store/BankStore'

// constant file
import constants from '../app/constants'

// Service files

import { alertMessage } from '../app/services/alerts'

describe('Withdraw component Testing', () => {
	
	var buttonClicked = sinon.spy()

	const wrapper = mount(<Withdraw buttonClicked={buttonClicked} />)
	BankStore.dispatch({type: constants.DEPOSIT_INTO_ACCOUNT, amount: 10})	
	BankStore.dispatch({type: constants.WITHDRAW_FROM_ACCOUNT, amount: 5})
	test('Withdraw Component Rendered', () => {
		expect(wrapper.length).toBe(1)
	})
	test('Check if value state defined', () => {
		expect(wrapper.state().value).toBeDefined()
	})

	test('Withdraw checked 5$ withdraw from account', () => {
		
		let state = BankStore.getState()

		expect(state.balance).toEqual(5)
	})
	test('Check if button Clicked', () => {
		wrapper.find('Button').simulate('click')
		expect(buttonClicked.calledOnce).toEqual(true);

	})

})