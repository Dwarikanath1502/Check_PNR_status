import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    NavbarText,
    NavbarToggler,
    NavLink,
    NavItem,
    Nav,
    Collapse
} from 'reactstrap'


const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Navbar
            color="dark"
            expand="md"
            dark
        >
            <NavbarBrand tag={Link} to="/">
                PNR
            </NavbarBrand>
            <NavbarBrand tag={Link} to="/">
                Indian Railway
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse navbar isOpen={isOpen}>
                <Nav
                    className="me-auto"
                    navbar
                >
                    <NavItem>
                        <NavLink tag={Link} to="/about">
                            About
                        </NavLink>
                    </NavItem>

                </Nav>
                <NavbarText>
                    @dwarikanath
                </NavbarText>
            </Collapse>
        </Navbar>

    )
}

export default Header