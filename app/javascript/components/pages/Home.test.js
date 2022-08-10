// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Home from './Home'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When Home renders", () => {
  it("displays a heading", () => {
    const home = shallow(<Home />)
    const homeHeading = home.find("h1")
    console.log("HOME", homeHeading.debug());
    expect(homeHeading.text()).toEqual("Welcome to SD Luxury Apartments")
  })
})

//output 

// ● When Home renders › displays a heading

//     Method “text” is meant to be run on 1 node. 0 found instead.

//       19 |     const homeHeading = home.find("h1")
//       20 |     console.log("HOME", homeHeading.debug());
//     > 21 |     expect(homeHeading.text()).toEqual("Welcome to SD Luxury Apartments")
//          |                        ^
//       22 |   })
//       23 | })

//       at ShallowWrapper.single (node_modules/enzyme/src/ShallowWrapper.js:1652:13)
//       at ShallowWrapper.text (node_modules/enzyme/src/ShallowWrapper.js:1093:17)
//       at Object.<anonymous> (app/javascript/components/pages/Home.test.js:21:24)




