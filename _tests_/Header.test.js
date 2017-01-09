import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Header from '../app/components/Header/Header'

// Bank Store 
import BankStore from '../app/Store/BankStore'

// constant file
import constants from '../app/constants'

// Service files

import { alertMessage } from '../app/services/alerts'


describe('Header component Testing', () => {
	const wrapper = shallow(<Header />)
	test('Header Component Rendered', () => {
		expect(wrapper.length).toBe(1)
	})
})