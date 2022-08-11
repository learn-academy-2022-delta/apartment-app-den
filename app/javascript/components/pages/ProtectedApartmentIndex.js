import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Row  } from 'reactstrap';


class ProtectedApartmentIndex extends Component {
  render() {
    const {
      logged_in,
      current_user,
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    console.log(this.props.apartments)
    return(
        <>
        <h1>My Listings</h1>
        <div className='myListings'>
            <Row sm="3">
                {this.props.apartments && this.props.apartments.map(apartment => {
                    return(
                <Card key ={apartment.id}>
                    <CardImg top width="100%" src={apartment.image} alt="Card image cap" ></CardImg>
                    <CardBody>
                        <CardTitle>{apartment.price} /month </CardTitle>
                        <CardSubtitle>{apartment.street} {apartment.city} </CardSubtitle>
                        <CardSubtitle>{apartment.bedrooms} Bedroom, {apartment.bathroom} Bathroom</CardSubtitle>
                        <Button>More Details</Button>
                    </CardBody>
                </Card>
                    )
                    })}
            </Row>
        </div>
      </>
    )
  }
}

export default ProtectedApartmentIndex
