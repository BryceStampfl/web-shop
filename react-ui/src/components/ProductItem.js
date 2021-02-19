import React from 'react';

const ProductItem = () => {

    const myProduct = {
        name: 'testName',
        price: 'testPrice',
        description: 'test description',
    }


    return(
        <div>
            <h2>{myProduct.name}</h2>
            <p>{myProduct.description}</p>
            <p>{myProduct.price}</p>
        </div>
    )
}

export default ProductItem;