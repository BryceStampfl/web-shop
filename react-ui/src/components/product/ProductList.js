import React from 'react';
import { useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import ProductItem from "./ProductItem"


const ProductList = () => {

    const products = useSelector(state => state.products)

    const renderedProducts = products.map(item => (
        <ProductItem key={item.title} product={item} />
    ))



    return (
        <div id="ProductList">
            <Row>
                <Col>
                    {renderedProducts}
                </Col>
            </Row>
        </div>
    )
}

export default ProductList;