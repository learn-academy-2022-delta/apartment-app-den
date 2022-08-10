import React, { Component } from 'react'
import { Card, CardTitle, CardSubtitle, CardBody, CardImg, Row, Col } from 'reactstrap'

export default class ApartmentIndex extends Component {
  render() {
    return (
      <>
      <h3>Find your Dream Apartment!</h3>
      <Row>
        {this.props.apartments && this.props.apartments.map(apartments => {
          return(
        <Col sm={4}>
          <Card>
            <CardImg top width="100%" src={apartments.image} alt="Card image cap" />
            <CardBody>
              <CardTitle>{apartments.price}/month</CardTitle>
              <CardSubtitle>{apartments.street}, {apartments.city} </CardSubtitle>
              <CardSubtitle>{apartments.bedrooms} Bedroom, {apartments.bathrooms} Bath</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      )
    })}
      </Row>
      </>

    )
  }
}
