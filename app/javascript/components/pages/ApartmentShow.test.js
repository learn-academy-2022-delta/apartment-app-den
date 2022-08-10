import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentShow from './ApartmentShow'
Enzyme.configure({ adapter: new Adapter() })
    
describe("When ApartmentShow renders", () => {
  const apartment = {
                    user_id: 1,
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

  it("displays a card", () => {
    const renderedApartmentShow = shallow(<ApartmentShow apartment={apartment} />)
    const apartmentShowHeading = renderedApartmentShow.find("Card")
    expect(apartmentShowHeading.length).toEqual(1)
  })
})
