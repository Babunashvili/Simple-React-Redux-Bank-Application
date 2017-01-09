import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import App from '../app/components/App'

// Bank Store 
import BankStore from '../app/Store/BankStore'

// constant file
import constants from '../app/constants'

// Service files

import { alertMessage } from '../app/services/alerts'



describe('App component Testing', () => {
	const wrapper = shallow(<App cards={BankStore.getState().cards} balance={BankStore.getState().balance} />)
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