import React from 'react';
import { Container, Navbar, Nav, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'

const Navigation = () => {
    const links = [
        {
            name: 'Home',
            to: '/'
        },
        {
            name: 'Executive Coaching',
            to: '/coaching',
        },
        {
            name: "Consulting",
            to: '/consulting',
        },
    ]

    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg" className="navigation">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand href="#" className="">Orcinus Health Solutions</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav" className="justify-content-end">
                    <Nav>
                        {/* <Nav.Item>
                            <Nav.Link href="/">
                                <Link to="/">Home</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/coaching">
                                <Link to="/coaching">Executive Coaching</Link>
                            </Nav.Link>
                        </Nav.Item> */}
                        {links.map((link, index) => (
                            <Nav.Item>
                                <LinkContainer to={link.to}>
                                    <Nav.Link key={index}>
                                        {link.name}
                                    </Nav.Link>
                                </LinkContainer>
                            </Nav.Item>
                        ))}
                    </Nav>
                    <Nav className='ps-2'>
                        <Button variant="light">Contact</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;