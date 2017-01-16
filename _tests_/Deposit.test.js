import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Deposit from '../app/components/Deposit/Deposit'

// Bank Store 
import BankStore from '../app/Store/store'

// constant file
import constants from '../app/constants'

// Deposit Action 

import depositAction from '../app/actions/depositAction'

// Service files

import { alertMessage } from '../app/services/alerts'




describe('Deposit component Testing', () => {
	var buttonClicked = sinon.spy()
	depositAction(12, 466433546)
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

	test('Check if Deposit Contain forms', () => {
		expect(wrapper.find('FormGroup').length).toBe(3)
	})

	test('Check if deposit state is defined', () => {	
		expect(wrapper.state).toBeDefined()	
	})

	test('hasComponent ControlLabel', () => {
		expect(wrapper.find('ControlLabel').length).toBe(2)
	})

	test('Withdraw Label Text', () => {
		expect(wrapper.find('ControlLabel').at(0).text()).toBe(' Deposit Amount: ')
		expect(wrapper.find('ControlLabel').at(1).text()).toBe(' Choose Credit Card: ')
	})

	test('hasComponent FormControl', () => {
		expect(wrapper.find('FormControl').length).toBe(2)
	})

	test('hasComponent Panel', () => {
		expect(wrapper.find('Panel').length).toBe(1)
	})
	
	test('Check if button Clicked', () => {
		wrapper.find('Button').simulate('click')
		expect(buttonClicked.calledOnce).toEqual(true);

	})

})