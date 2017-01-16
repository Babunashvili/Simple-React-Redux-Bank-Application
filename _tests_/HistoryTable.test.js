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
	const wrapper = mount(<HistoryTable trans={BankStore.getState().history.transactions} />)

	test('HistoryTable component exist', () => {
		expect(wrapper.length).toBe(1)
	})

	test('Table Contain', () => {
		expect(wrapper.find('Table').length).toBe(1)
	})

	test('hasTag thead', () => {
		expect(wrapper.find('Table').contains('<thead></thead>'))
	})
	test('Table header Text', () => {
		expect(wrapper.find('th').at(0).text()).toBe('Transaction ID')
		expect(wrapper.find('th').at(1).text()).toBe('Date')
		expect(wrapper.find('th').at(2).text()).toBe('Description')
		expect(wrapper.find('th').at(3).text()).toBe('Amount')
	})
	test('hasTag tbody', () => {
		expect(wrapper.find('Table').contains('<tbody></tbody>'))
	})
	test('Test if History Transaction rendered', () => {

		expect(wrapper.find('tbody').contains('<tr></tr>'))

	})

})
