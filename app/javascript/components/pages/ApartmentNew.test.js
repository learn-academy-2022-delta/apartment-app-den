// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import ApartmentNew from './ApartmentNew'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentNew renders", () => {

  let apartmentNew;

  beforeEach(()=>{
    apartmentNew = shallow(<ApartmentNew />)
  })

  it("displays a heading", () => {
    const apartmentNewHeading = apartmentNew.find("h1")
    expect(apartmentNewHeading.text()).toEqual("New Listing")
  })
  it("displays a ten FormGroups", () => {
    const apartmentNewFormGroup = apartmentNew.find("FormGroup")
    expect(apartmentNewFormGroup.length).toEqual(10)
  })
  it("displays ten labels", () => {
    const apartmentNewLabel = apartmentNew.find("Label")
    expect(apartmentNewLabel.length).toEqual(10)
  })
  it("displays ten inputs", () => {
    const apartmentNewInput = apartmentNew.find("Input")
    expect(apartmentNewInput.length).toEqual(10)
  })
  it("displays a button", () => {
    const apartmentNewButton = apartmentNew.find("Button")
    expect(apartmentNewButton.length).toEqual(1)
  })
})