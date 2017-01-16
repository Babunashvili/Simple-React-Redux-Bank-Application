import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import HistoryTable from '../app/components/History/HistoryTable'

// Bank Store 
import BankStore from '../app/Store/store'

// constant file
import constants from '../app/constants'

// Service files

import { alertMessage } from '../app/services/alerts'




describe('HistoryTable component Testing', () => {
	const wrapper = shallow(<HistoryTable trans={BankStore.getState().history.transactions} />)
	test('HistoryTable component exist', () => {
		expect(wrapper.length).toBe(1)
	})
	test('Table Contain', () => {
		expect(wrapper.find('Table').length).toBe(1)
	})
	test('Test if History Transaction rendered', () => {

		expect(wrapper.find('tbody').contains('<tr></tr>'))

	})

})
