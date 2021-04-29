import React from 'react';
import {Link} from 'react-router-dom'

export const DropDownMenuItem = (props) => {
    return (
        //<NavDropdown.Item href="/home">{props.item}</NavDropdown.Item>
        <Link to="/home"> Home </Link>
    )
}

export default DropDownMenuItem