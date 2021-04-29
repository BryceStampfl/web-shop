import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'


import DropDownMenu from "./DropDownMenu"

export const Header = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Web Shop</Navbar.Brand>            
            <DropDownMenu />
            <Link to="/">Home</Link>
            <Link to="/app/productlist"> /app/home </Link>
            <Link to="/app/addproduct"> /app/page </Link>

        </Navbar>
    )

}

export default Header;