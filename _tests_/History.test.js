import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import History from '../app/components/History/History'

// Bank Store 
import BankStore from '../app/Store/BankStore'

// constant file
import constants from '../app/constants'

// Service files

import { alertMessage } from '../app/services/alerts'



describe('History component Testing', () => {
	BankStore.dispatch({transaction: {date: '06-01-2017', amount: '10', description: 'Somthing'}, type:constants.ON_TRANSACTION})
	const wrapper = shallow(<History trans={BankStore.getState().transactions}/>)
	
	test('History Component Rendered', () => {
		expect(wrapper.length).toBe(1)
	})

	
})