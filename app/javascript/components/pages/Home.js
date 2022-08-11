import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'

 class Home extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    return (
      <>
        {!logged_in && <h1> Welcome to SD Luxury Apartments </h1>}
        <br />
        {!logged_in && <p> Easily find what you're looking for through our App.  </p>}

        <Nav>
          {!logged_in &&
            <NavItem>
              <a href={sign_in_route} className="nav-link">Sign In</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={new_user_route} className="nav-link">Sign Up</a>
            </NavItem>
          }
        </Nav>



        {logged_in && <h1> Welcome User </h1>}
        <br />
        {logged_in && <p> If you run into any issues you can contact us .  </p>}

        <Nav>
          {logged_in &&
            <NavItem>
              <a href='/apartmentshow' className="nav-link">My Listings</a>
            </NavItem>
          }
          {logged_in &&
            <NavItem>
              <a href='/apartmentindex' className="nav-link">My Apartments</a>
            </NavItem>
          }
        </Nav>
      </>
    )
  }
}
export default Home







