import React from 'react'
import { shallow } from 'enzyme'

import App from '../app/components/App'
import History from '../app/components/History/History'
import Header from '../app/components/Header/Header'
import Deposit from '../app/components/Deposit/Deposit'
import Withdraw from '../app/components/Withdraw/Withdraw'


test('App Component Rendered', () => {
	const wrapper = shallow(<App/>)
	expect(wrapper.length).toBe(1)
})

// test('History Component Rendered', () => {
// 	const wrapper = shallow(<History/>)
// 	expect(wrapper.length).toBe(1)

// })

test('Deposit Component Rendered', () => {
	const wrapper = shallow(<Deposit/>)
	expect(wrapper.length).toBe(1)
})

test('Header Component Rendered', () => {
	const wrapper = shallow(<Header/>)
	expect(wrapper.length).toBe(1)
})

test('Withdraw Component Rendered', () => {
	const wrapper = shallow(<Withdraw/>)
	expect(wrapper.length).toBe(1)
})



