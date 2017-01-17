import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'

// Bank Store 
import BankStore from '../app/Store/store'


import { 
	checkBalance, 
	checkCardBalance, 
	checkEmptyValue, 
	checkAmountQty, 
} from '../app/services/validation'


describe('Service Testing functions ', () => {
	test('CheckBalance beewten current balance and amount', () => {
		expect(checkBalance(12, 150)).toBeTruthy()
	})

	test('Check Balance on the card ', () => {
		let card = [
			{
				balance: 842,
				key: 466433546
			}
		]
		BankStore.dispatch({type: 'FETCH_DATA', payload: { cards: card }})
		expect(checkCardBalance(12, 466433546)).toBeTruthy()
	})

	test('Check if value is empty', () => {
		expect(checkEmptyValue(12)).toBeTruthy()
	})

	test('Check amount ', () => {
		expect(checkAmountQty(12)).toBeTruthy()
	})


})


