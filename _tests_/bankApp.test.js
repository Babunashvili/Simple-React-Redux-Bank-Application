import React from 'react'
import renderer from 'react-test-renderer'

import Deposit from '../app/components/Deposit/Deposit'
import Withdraw from '../app/components/Withdraw/Withdraw'
import Header from '../app/components/Header/Header'
import History from '../app/components/History/History'


describe('check components if Match', () => {
	it('Deposit component Checking', () => {
		const tree = renderer.create(
			<Deposit />
		).toJSON()

		expect(tree).toMatchSnapshot()

	})
	it('Withdraw component Checking', () => {
		const tree = renderer.create(
			<Withdraw />
		).toJSON()

		expect(tree).toMatchSnapshot()

	})
	it('Header component Checking', () => {
		const tree = renderer.create(
			<Header />
		).toJSON()

		expect(tree).toMatchSnapshot()

	})
	it('History component Checking', () => {
		const tree = renderer.create(
			<History />
		).toJSON()

		expect(tree).toMatchSnapshot()

	})
})