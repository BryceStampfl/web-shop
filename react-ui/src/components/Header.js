import React from 'react'
import { Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap'

const Header = () => {

    return(
        <Navbar bg="light">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto" >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2"></FormControl>
                <Button variant="outline-primary">Search</Button>
            </Form>
        </Navbar>
    )
}

export default Header;