import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import App from '../app/components/App'

// Bank Store 
import BankStore from '../app/Store/store'

// constant file
import constants from '../app/constants'

// Service files

import { alertMessage } from '../app/services/alerts'



describe('App component Testing', () => {
	const wrapper = mount(<Provider store={BankStore}>
				<App store={BankStore} cards={BankStore.getState().cards} />
			</Provider>	
		)
	test('App Component Rendered', () => {
		expect(wrapper.length).toBe(1)
	})
	test('hasClassName  container', () => {
		let container = wrapper.findWhere(n => n.hasClass('container'))
		expect(container.length).toBe(3)
	})
	test('hasComponent Header', () => {
		expect(wrapper.find('Header').length).toBe(1)
	})
	test('hasComponent Withdraw', () => {
		expect(wrapper.find('Withdraw').length).toBe(1)
	})
	test('hasComponent Deposit', () => {
		expect(wrapper.find('Deposit').length).toBe(1)
	})
	test('hasComponent History', () => {
		expect(wrapper.find('History').length).toBe(1)
	})
	
	
	
})