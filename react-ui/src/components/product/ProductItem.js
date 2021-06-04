import React from 'react';

import { Card, Col, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const ProductItem = (props) => {


    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col md={4}>
                        <LinkContainer to={`/app/product/`+ props.product.id} id={props.product.id}>
                            <Card.Img variant="float" src={process.env.PUBLIC_URL + '/placeholder.png'} />
                        </LinkContainer>

                    </Col>
                    <Col md={8}>
                        <Card.Title className="text-center" >{props.product.title}</Card.Title>

                        <Card.Text>{props.product.description}</Card.Text>
                        <Card.Subtitle>{props.product.price}</Card.Subtitle>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ProductItem;