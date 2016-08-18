import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'

import SearchForm from '../app/components/search'
import List from '../app/components/list'

describe('SearchForm component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<SearchForm />)
  })
  it('Component should exist', () => {
    expect(wrapper).to.exist
  })
  it('Component should contain 2 inputs and submit button', () => {
    expect(wrapper.type()).to.equal('form')
    let inputOwner = wrapper.childAt(0)
    expect(inputOwner.type()).to.equal('input')
    let inputRepo = wrapper.childAt(1)
    expect(inputRepo.type()).to.equal('input')
    let submit = wrapper.childAt(2)
    expect(submit.type()).to.equal('input')
  })
})

describe('List component', () => {
  let wrapper
  let fakeData = []
  beforeEach(() => {
    wrapper = shallow(<List issues = {fakeData} />)
  })
  it('Component should exist', () => {
    expect(wrapper).to.exist
  })
})
