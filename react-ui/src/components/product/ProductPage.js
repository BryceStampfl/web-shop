import React from 'react';
import { useSelector } from 'react-redux'


import { Card, Col, Row } from 'react-bootstrap'

import { useLocation } from 'react-router-dom';
const ProductPage = () => {
    
    const location = useLocation()
    const productId = location.pathname.charAt(location.pathname.length-1);
   
    const product = useSelector(state => state.reducer.products.find(product => (
        product.id === productId
    )));
    console.log(product)
    return(
        <div>

        </div>
    //     <Card>
    //     <Card.Body>
    //         <Row>
    //             <Col md={6}>
    //                     <Card.Img variant="float" src={process.env.PUBLIC_URL + '/placeholder.png'} />
    //             </Col>
    //             <Col md={6}>
    //                 <Card.Title className="text-center" >{props.product.title}</Card.Title>

    //                 <Card.Text>{props.product.description}</Card.Text>
    //                 <Card.Subtitle>{props.product.price}</Card.Subtitle>
    //             </Col>
    //         </Row>
    //     </Card.Body>
    // </Card>
    )
}

export default ProductPage;