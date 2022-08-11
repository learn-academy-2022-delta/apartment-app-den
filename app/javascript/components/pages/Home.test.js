// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

import Home from './Home'

Enzyme.configure({ adapter: new Adapter() })

describe("When Home renders", () => {
  it("displays a heading", () => {
    const home = shallow(<Home />)
    const homeHeading = home.find("h1")
    expect(homeHeading.text()).toEqual(" Welcome to SD Luxury Apartments ")
  })
  it("renders four navItem", () => {
    const home = shallow(<Home />)
    const renderedNavItem = home.find("NavItem")
    expect(renderedNavItem.length).toEqual(2)
})
})



