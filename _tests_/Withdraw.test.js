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

	test('hasComponent ControlLabel', () => {
		expect(wrapper.find('ControlLabel').length).toBe(1)
	})

	test('Withdraw Label Text', () => {
		expect(wrapper.find('ControlLabel').text()).toBe(' Withdraw Amount: ')
	})

	test('hasComponent FormControl', () => {
		expect(wrapper.find('FormControl').length).toBe(1)
	})
	test('hasComponent Panel', () => {
		expect(wrapper.find('Panel').length).toBe(1)
	})

	test('Check if Transation data return from store', () => {
		
		expect(BankStore.getState().transactions).toEqual({balance: 0, cards:[], transactions: []})
	})

	test('Check if button Clicked', () => {
		BankStore.dispatch({
			type: 'DEPOSIT_INTO_ACCOUNT',
			payload: {
				balance: 20
			}
		})

		wrapper.find('Button').simulate('click', wrapper.setState({value: 12, card: 466433546}))

		BankStore.dispatch({
			type: 'WITHDRAW_FROM_ACCOUNT',
			payload: {
				balance: BankStore.getState().transactions.balance - wrapper.state().value
			}
		})
		expect(BankStore.getState().transactions.balance).toEqual(8)
	})


})