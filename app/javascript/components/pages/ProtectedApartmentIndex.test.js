import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProtectedApartmentIndex from './ProtectedApartmentIndex'

Enzyme.configure({ adapter: new Adapter() })

describe("When ProtectedApartmentIndex renders", () => {
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
    let renderedProtectedApartmentIndex;
  
    beforeEach(() => {
      renderedProtectedApartmentIndex = shallow(<ProtectedApartmentIndex/>);
    });
  
    it("displays a heading", () => {
      const protectedApartmentIndexHeading = renderedProtectedApartmentIndex.find("h1")
      expect(protectedApartmentIndexHeading.text()).toEqual("My Listings")
    })
    it("displays a card of the current users apartment listings", () => {
      const protectedApartmentIndexCard = renderedProtectedApartmentIndex.find("Card")
      expect(protectedApartmentIndexCard.length).toEqual(1)
    })
  })