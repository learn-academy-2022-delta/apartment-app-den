import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row, Col, Card, CardImg, CardTitle, CardSubtitle, Button} from "reactstrap"

class ApartmentShow extends Component {

  render() {
    const {
      logged_in,
      current_user,
      apartment 
    } = this.props
    return (
      <>
        <h3>ApartmentShow</h3>
        {apartment &&
          <Container fluid>
            <Row>
              <Col md="6">
                <Card>
                  {/* <CardImg>
                    {apartment.image}
                  </CardImg> */}
                  <CardTitle>
                    {apartment.price} /month
                  </CardTitle>
                  <CardSubtitle>
                    {apartment.street}, {apartment.city}, {apartment.state}
                  </CardSubtitle>
                  <CardSubtitle>
                    {apartment.bedrooms}, {apartment.bathrooms}
                  </CardSubtitle>
                  <CardSubtitle>
                    {apartment.pets}:
                  </CardSubtitle>
                  {/* <h5 style='strong'>Contact Us!</h5>
                  <p> Manager: {apartment.manager} </p>
                  <p> Email: {apartment.email} </p> */}
                  { current_user.id === apartment.user_id &&
                  <NavLink to={'/apartmentindex'} >
                    <Button onClick={() => this.props.deleteApartment(apartment.id)}>Delete Apartment</Button>
                  </NavLink>
                  }
                </Card>
              </Col>
            </Row>
          </Container>
        }
      </>
    )
  }
}

export default ApartmentShow