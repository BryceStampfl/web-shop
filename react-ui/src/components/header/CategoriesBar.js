import React from 'react'

import { Nav, Navbar } from 'react-bootstrap'


const CategoriesBar = () => {
    const CATEGORIES = ["Clothing", "Jewelry", "Books", "Electronics", "Beauty", "Sports", "General"]


    const renderedLinks = CATEGORIES.map(ele => (
        <Nav.Link href="#">{ele}</Nav.Link>
    ))

    return (
        <Navbar bg="light" variant="dar">
            {renderedLinks}
        </Navbar>

    )
}

export default CategoriesBar