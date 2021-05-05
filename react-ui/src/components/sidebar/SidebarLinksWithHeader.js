import React from 'react';

import { LinkContainer } from 'react-router-bootstrap'


import { Nav } from 'react-bootstrap'


const SidebarLinksWithHeader = ({ header, links }) => {

    const renderedLinks = links.map(link => (
        <LinkContainer to={link.path}>
            <Nav.Link>{link.linkTitle}</Nav.Link>
        </LinkContainer>

    ))

    return (
        <div>
            <p className="font-weight-bold">{header}</p>
            {renderedLinks}
        </div>
    )
}

export default SidebarLinksWithHeader;