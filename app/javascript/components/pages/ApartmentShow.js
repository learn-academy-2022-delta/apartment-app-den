import React, { Component } from 'react'
import { Container, Row, Col, Card, CardImg, CardTitle, CardSubtitle} from "reactstrap"

class ApartmentShow extends Component {

  render() {
    let { apartment } = this.props

    return (
      <>
        <h3>ApartmentShow</h3>
        {apartment &&
          <Container fluid>
            <Row>
              <Col md="6">
                <Card>
                  <CardImg>
                    {apartment.image}
                  </CardImg>
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
                  <h5 style='strong'>Contact Us!</h5>
                  <p> Manager: {apartment.manager} </p>
                  <p> Email: {apartment.email} </p>
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