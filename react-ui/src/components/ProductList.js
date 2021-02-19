import React from 'react';
import {Row, Col} from 'react-bootstrap'
import ProductItem from "./ProductItem"

const ProductList = () => {


return(
    <div>
        <Row>
            <Col>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            </Col>
        </Row>
    </div>
)

}

export default ProductList;