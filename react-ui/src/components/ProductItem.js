import React from 'react';

import { productSlice } from '../_reducers/productsSlice';
import { Card, Col, Row } from 'react-bootstrap'

const ProductItem = (props) => {



    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col md={4}>
                        <Card.Img variant="float" src={process.env.PUBLIC_URL + 'placeholder.png'} />

                    </Col>
                    <Col md={8}>
                        <Card.Title>{props.product.title}</Card.Title>

                        <Card.Text>{props.product.description}</Card.Text>
                        <Card.Subtitle>{props.product.price}</Card.Subtitle>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ProductItem;