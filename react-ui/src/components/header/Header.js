import React, { useState } from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DropDownMenu from "./DropDownMenu"
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => {

    const [search, setSearch] = useState('');

    const onSearchChanged = (e) => { setSearch(e.target.value); }
    // We have to use to update the current state of the search
    // or else it doesnt get the last input 
    function getSearch() { return search; }

    return (
        <div className="header">
                <Navbar bg="dark" expand="lg" >\
                    <LinkContainer to="/">
                        <Navbar.Brand>Web Shop</Navbar.Brand>
                    </LinkContainer>

                    <input 
                    type="text" 
                    id="searchBar" 
                    value={getSearch()} 
                    onChange={onSearchChanged} 
                    placeholder="Search" />
                    <DropDownMenu className="ml-auto" />
                </Navbar>
        </div>
    )

}

export default Header;