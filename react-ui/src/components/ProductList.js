import React from 'react';
import { useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import ProductItem from "./ProductItem"


const ProductList = () => {

    const products = useSelector(state => state.products)
    let numberRendered = 3;

    const renderedProducts = products.map(item => (
       <ProductItem product={item} />
    ))

console.log(renderedProducts);

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