import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

export default class ApartmentNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newListing: {
        street: "",
        city: "",
        state: "",
        manager: "",
        email: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        pets: "",
        image: "",
        user_id: this.props.current_user.id
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    const { newListing } = this.state
    newListing[e.target.name] = e.target.value
    this.setState({ newListing: newListing })
  }

  handleSubmit = () => {
    this.props.createNew(this.state.newListing)
    this.setState({ submitted: true})
  }
  render() {
    return (
      <>
        <h1>New Listing</h1>
        <Form>
          <FormGroup>
            <Label for="street">Street</Label>
            <Input 
              type="text" 
              name="street" 
              onChange={this.handleChange} 
              value={this.state.newListing.street}   
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input 
              type="text" 
              name="city" 
              onChange={this.handleChange}
              value={this.state.newListing.city}
            />
          </FormGroup>
          <FormGroup>
            <Label for="state">State</Label>
            <Input 
              type="text" 
              name="state"
              onChange={this.handleChange}
              value={this.state.newListing.state}
            />
          </FormGroup>
          <FormGroup>
            <Label for="manager">Manager</Label>
            <Input 
              type="text" 
              name="manager"
              onChange={this.handleChange}
              value={this.state.newListing.manager}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input 
              type="text" 
              name="email" 
              onChange={this.handleChange}
              value={this.state.newListing.email}
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input 
              type="text" 
              name="price" 
              onChange={this.handleChange}
              value={this.state.newListing.price}
            />
          </FormGroup>
          <FormGroup>
            <Label for="bedrooms">Bedrooms</Label>
            <Input 
              type="text" 
              name="bedrooms" 
              onChange={this.handleChange}
              value={this.state.newListing.bedrooms}
            />    
          </FormGroup>
          <FormGroup>
            <Label for="bathrooms">Bathrooms</Label>
            <Input 
              type="text" 
              name="bathrooms" 
              onChange={this.handleChange}
              value={this.state.newListing.bathrooms}
            />         
          </FormGroup>
          <FormGroup>
            <Label for="pets">Pets</Label>
            <Input 
              type="text" 
              name="pets" 
              onChange={this.handleChange}
              value={this.state.newListing.pets}
            />           
          </FormGroup>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input 
              type="text" 
              name="image" 
              onChange={this.handleChange}
              value={this.state.newListing.image}
            />       
          </FormGroup>
          <Button
            name="submit"
            onClick={this.handleSubmit}>
            Submit
          </Button>
          { this.state.submitted && <Redirect to="/apartmentindex"/> }
        </Form>
      </>
    )
  }
}
