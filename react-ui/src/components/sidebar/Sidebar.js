import React from 'react';

import { Nav, Container } from 'react-bootstrap'

import SidebarLinksWithHeader from './SidebarLinksWithHeader';


const Sidebar = () => {

    const SIDEBAR_LINKS = [
        {
            linkHeader: "Header 1",
            links: [
                {
                    linkTitle: "Link 1",
                    path: "/app/productlist"
                },
                {
                    linkTitle: "Link 2",
                    path: "/app/productlist"
                },
                {
                    linkTitle: "Link 3",
                    path: "/app/productlist"
                },
                {
                    linkTitle: "Link 4",
                    path: "/app/productlist"
                },
            ]
        },
        {
            linkHeader: "Header 2",
            links: [
                {
                    linkTitle: "Link 1",
                    path: "/app/productlist"
                },
                {
                    linkTitle: "Link 2",
                    path: "/app/productlist"
                },
                {
                    linkTitle: "Link 3",
                    path: "/app/productlist"
                },
                {
                    linkTitle: "Link 4",
                    path: "/app/productlist"
                },
            ]
        },
        {
            linkHeader: "Header 3",
            links: [
                {
                    linkTitle: "Link 1",
                    path: "/app/productlist"
                },
                {
                    linkTitle: "Link 2",
                    path: "/app/productlist"
                },
                {
                    linkTitle: "Link 3",
                    path: "/app/productlist"
                },
                {
                    linkTitle: "Link 4",
                    path: "/app/productlist"
                },
            ]
        },

    ]


    const renderedLinks = SIDEBAR_LINKS.map(groupLinks => (
        <SidebarLinksWithHeader
            header={groupLinks.linkHeader}
            links={groupLinks.links} />
    ))

    return (
        <Nav className="flex-column">
            <Container>
                {renderedLinks}
            </Container>
        </Nav>
    )
}

export default Sidebar;