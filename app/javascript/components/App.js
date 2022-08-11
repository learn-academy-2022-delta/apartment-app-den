import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import ProtectedApartmentIndex from './pages/ProtectedApartmentIndex'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: []
    }
  }

componentDidMount(){
  this.readAparment()
}

readApartment = () => {
  fetch ("/apartments")
  .then(response => response.json())
  .then(apartmentsArray => this.setState({apartments: apartmentsArray}))
  .catch(errors => console.log ("Apartment read errors: ", errors))
}


  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log(this.state.apartments)
    return (
      
        <Router>
          <Header {...this.props} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/apartmentindex" render={(props) => < ApartmentIndex apartments={this.state.apartments} />} />
            <Route path="/mylistings" render={(props) =>{
              let myListings = this.state.apartments.filter(apartment => apartment.user.id === current_user.id)
              return(
                <ProtectedApartmentIndex apartments={myListings} />)}} />
            <Route path="/apartmentshow" component={ApartmentShow} />
            <Route path="/apartmentnew" component={ApartmentNew} />
            <Route path="/apartmentedit" component={ApartmentEdit} />
            <Route component={NotFound}/>
          </Switch>
        </Router>
        
        
  
    )
  }
}

export default App