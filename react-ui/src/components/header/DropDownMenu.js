import React, { useState, useEffect } from 'react'
import { NavDropdown } from 'react-bootstrap'

import DropDownMenuItem from './DropDownMenuItem'

const DropDownMenu = () => {

    const menuItems = ["item1", "item2", "item3", "item4",]
    const [menuOpen, setMenuOpen] = useState(false)

    const dropDownMenuItemList = menuItems.map(item => (
        <DropDownMenuItem key={item} item={item} />
    ))


    return (
        <NavDropdown
            title="Dropdown"
            className="ml-auto"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
            show={menuOpen}
        >
            {dropDownMenuItemList}
        </NavDropdown>
    )
}

export default DropDownMenu;