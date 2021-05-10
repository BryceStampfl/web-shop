import React from 'react'

import { Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const CategoriesBar = () => {
    const CATEGORIES = ["Clothing", "Jewelry", "Books", "Electronics", "Beauty", "Sports", "General"]


    const renderedLinks = CATEGORIES.map(ele => (
        <LinkContainer to={`/app/${ele}`}>
            <Nav.Link >{ele}</Nav.Link>
        </LinkContainer>
    ))

    return (
        <Navbar bg="light" variant="dark">
            {renderedLinks}
        </Navbar>

    )
}

export default CategoriesBar