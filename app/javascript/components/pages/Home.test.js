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
    const homeHeading = home.find("h3")
    console.log("HOME", homeHeading.debug());
    expect(homeHeading.text()).toEqual(" Home ")
  })
})

// PASS  app/javascript/components/pages/Home.test.js
// ● Console

//   console.log
//     HOME <h3>
//        Home 
//     </h3>

//     at Object.<anonymous> (app/javascript/components/pages/Home.test.js:20:13)



