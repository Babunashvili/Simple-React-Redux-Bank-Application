import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import App from '../app/components/App'
import History from '../app/components/History/History'
import HistoryTable from '../app/components/History/HistoryTable'
import EmptyHistory from '../app/components/History/EmptyHistory'
import Header from '../app/components/Header/Header'
import Deposit from '../app/components/Deposit/Deposit'
import Withdraw from '../app/components/Withdraw/Withdraw'

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

describe('Deposit component Testing', () => {
	var buttonClicked = sinon.spy()
	const wrapper = mount(<Deposit cards={BankStore.getState().cards} buttonClicked={buttonClicked} />)
	wrapper.setProps({
		handleAlert: alertMessage
	})
	BankStore.dispatch({type: constants.DEPOSIT_INTO_ACCOUNT, amount: 10})
	test('Deposit Component Rendered', () => {
		expect(wrapper.length).toBe(1)
	})
	test('Check if value state defined', () => {
		expect(wrapper.state().value).toBeDefined()
	})
	test('Deposit checked 10$ add in ', () => {
		let state = BankStore.getState()
		expect(state.balance).toEqual(10)
	})
	test('Check if button Clicked', () => {
		wrapper.find('Button').simulate('click')
		expect(buttonClicked.calledOnce).toEqual(true);

	})

})

describe('Header component Testing', () => {
	const wrapper = shallow(<Header />)
	test('Header Component Rendered', () => {
		expect(wrapper.length).toBe(1)
	})
})

describe('Withdraw component Testing', () => {
	var buttonClicked = sinon.spy()
	const wrapper = mount(<Withdraw buttonClicked={buttonClicked} />)
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

describe('History component Testing', () => {
	BankStore.dispatch({transaction: {date: '06-01-2017', amount: '10', description: 'Somthing'}, type:constants.ON_TRANSACTION})
	const wrapper = shallow(<History trans={BankStore.getState().transactions}/>)
	
	test('History Component Rendered', () => {
		expect(wrapper.length).toBe(1)
	})

	
})

describe('HistoryTable component Testing', () => {
	const wrapper = shallow(<HistoryTable trans={BankStore.getState().transactions} />)
	test('HistoryTable component exist', () => {
		expect(wrapper.length).toBe(1)
	})

	test('Test if History Transaction rendered', () => {

		expect(wrapper.find('tbody').contains('<tr></tr>'))

	})

})



