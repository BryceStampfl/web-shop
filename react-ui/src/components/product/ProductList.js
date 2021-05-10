import React from 'react';
import { useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import ProductItem from "./ProductItem"

import { selectProductsByCategory } from '../../_reducers/productsSlice'


const ProductList = ({ category }) => {

    const products = filterProducts(category, useSelector(state => state.reducer.products));

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

function filterProducts(category, products) {
    if (category !== "GENERAL") {
        return products.filter((item) => item.category === category)
    }
    return products;

}