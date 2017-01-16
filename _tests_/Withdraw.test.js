import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Withdraw from '../app/components/Withdraw/Withdraw'

// Bank Store 
import BankStore from '../app/Store/store'

// constant file
import constants from '../app/constants'

// Service files

import { alertMessage } from '../app/services/alerts'

describe('Withdraw component Testing', () => {
	
	var buttonClicked = sinon.spy()

	const wrapper = mount(
		<Provider store={BankStore}>
			<Withdraw buttonClicked={buttonClicked} />
		</Provider>
		)
	
	test('Withdraw Component Rendered', () => {
		expect(wrapper.length).toBe(1)
	})
	test('Check if Deposit Contain forms', () => {
		expect(wrapper.find('FormGroup').length).toBe(2)
	})
	test('Check if deposit state is defined', () => {
		expect(wrapper.state).toBeDefined()
	})
	test('Check if button Clicked', () => {
		wrapper.find('Button').simulate('click')
		expect(buttonClicked.calledOnce).toEqual(true);

	})

})