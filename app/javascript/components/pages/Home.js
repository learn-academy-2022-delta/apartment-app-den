import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <>
        <h1> Welcome to SD Luxury Apartments </h1>
        <br />
        <h5> Easily find what you're looking for through our App.  </h5>

       <div>
        <button> <a href={sign_in_route} className="nav-link">Sign In</a> </button>

        <button> <a href={new_user_route} className="nav-link">Sign Up</a> </button>
        </div>
      </>
    )
  }
}
