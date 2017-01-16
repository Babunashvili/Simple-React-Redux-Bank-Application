import React from 'react'
import {
    Provider
} from 'react-redux'
import {
    shallow,
    mount
} from 'enzyme'
import sinon from 'sinon'
import Header from '../app/components/Header/Header'

// Bank Store 
import BankStore from '../app/Store/store'

// constant file
import constants from '../app/constants'

// Service files

import {
    alertMessage
} from '../app/services/alerts'


describe('Header component Testing', () => {
    const wrapper = shallow( <
        Provider store = {
            BankStore
        } >
        <
        Header / >
        <
        /Provider>
    )
    test('Header Component Rendered', () => {
        expect(wrapper.length).toBe(1)
    })
    
})