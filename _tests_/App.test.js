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
	const wrapper = shallow(<Provider store={BankStore}>
				<App store={BankStore} cards={BankStore.getState().cards} />
			</Provider>	
		)
	test('App Component Rendered', () => {
		expect(wrapper.length).toBe(1)
	})
	
	
	
})