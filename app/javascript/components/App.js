import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import NotFound from './pages/NotFound'
import ProtectedApartmentIndex from './pages/ProtectedApartmentIndex'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount() {
    this.readApartment()
  }

readApartment = () => {
  fetch ("/apartments")
  .then(response => response.json())
  .then(apartmentsArray => this.setState({apartments: apartmentsArray}))
  .catch(errors => console.log ("Apartment read errors: ", errors))
}

deleteApartment = (apartmentId) => {
  fetch(`/apartments/${apartmentId}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  })
  .then(response => response.json())
  .then(() => this.readApartment())
  .catch(errors => console.log ("Apartment delete errors:", errors))
}

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      
        <Router>
          <Header {...this.props} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/apartmentindex" render={(props) => < ApartmentIndex apartments={this.state.apartments} />} />
            <Route path="/mylistings" render={(props) =>{
              let myListings = this.state.apartments.filter(apartment => apartment.user_id === current_user.id)
              return(
              <ProtectedApartmentIndex 
              apartments={myListings} 
              />
              )
              }} />
            <Route path="/apartmentshow/:id" render={(props) => {
              let id = +props.match.params.id
              let apartment = this.state.apartments.find(apartment => apartment.id === id)
              return <ApartmentShow apartment={apartment} {...this.props} deleteApartment={this.deleteApartment}/>}} />
            <Route path="/apartmentnew" component={ApartmentNew} />
            <Route path="/apartmentedit" component={ApartmentEdit} />
            <Route component={NotFound}/>
          </Switch>
        </Router>
        
        
  
    )
  }
}

export default App