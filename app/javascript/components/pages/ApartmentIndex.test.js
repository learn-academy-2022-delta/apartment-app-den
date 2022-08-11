// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import ApartmentIndex from './ApartmentIndex'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentIndex renders", () => {
  const props = {
    apartments: [
      {
        street: '444 Beyonce Blvd.',
        city: 'Houston',
        state: 'Texas',
        manager: 'Tina Knowles',
        email: 'MsTina@test.com',
        price: '2000',
        bedrooms: 3,
        bathrooms: 2,
        pets: 'yes',
        image: 'https://images.unsplash.com/photo-1630699034276-0be879da7ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60'

    }
      
    ]
  }
  let renderedApartmentIndex;

  beforeEach(() => {
    renderedApartmentIndex = shallow(<ApartmentIndex {...props} />);
  });

  it("displays a heading", () => {
    const apartmentIndexHeading = renderedApartmentIndex.find("h3")
    expect(apartmentIndexHeading.text()).toEqual("Find your Dream Apartment!")
  })
  it("displays an apartment", () => {
    const apartmentIndexCard = renderedApartmentIndex.find("Card")
    expect(apartmentIndexCard.length).toEqual(1)
  })
})