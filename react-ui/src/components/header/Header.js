import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'

import DropDownMenu from "./DropDownMenu"

export const Header = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Web Shop</Navbar.Brand>            
            <DropDownMenu />
        </Navbar>
    )

}

export default Header;