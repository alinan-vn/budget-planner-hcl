import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class Navigation extends React.Component {

    render(){
        return(
            <Navbar bg="dark" variant="dark">                
                <Navbar.Brand href="/">Team Budget Planner</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/finance">Finance</Nav.Link>
                    <Nav.Link href="/vendor-management">Vendor Management</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Navigation