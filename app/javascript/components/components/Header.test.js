import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'
Enzyme.configure({ adapter: new Adapter() })

describe("When Header renders", () => {
  it("it displays all apartments when logged in", () => {
    const header = shallow (< Header />)
    const headerHeading = header.find("h1")
    expect(headerHeading.text()).toEqual(" Welcome to SD Luxury Apartments ")
  })

  it("renders three navItem", () => {
    const header = shallow(<Header />)
    const renderedNavItem = header.find("NavItem")
    expect(renderedNavItem.length).toEqual(3)
  })
})


