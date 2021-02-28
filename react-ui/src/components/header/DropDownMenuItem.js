import React from 'react';
import { NavDropdown } from 'react-bootstrap'

export const DropDownMenuItem = (props) => {

    return (
        <NavDropdown.Item href="#temp">{props.item}</NavDropdown.Item>
    )

}

export default DropDownMenuItem