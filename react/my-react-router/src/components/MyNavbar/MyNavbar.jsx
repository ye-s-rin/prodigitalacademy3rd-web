import React from 'react';
import { Container, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const EXPAND_BREAKPOINT = 'md';

export default function MyNavbar({ brandTitle, offCanvasTitle }) {
    return (
        <Navbar expand={EXPAND_BREAKPOINT} className='mb-3' sticky='top' bg='dark' variant='dark'>
            <Container fluid>
                <Link to='/'>
                    <Navbar.Brand as="div">{brandTitle}</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls={`Navbar-expand-${EXPAND_BREAKPOINT}`} />
                <Navbar.Offcanvas
                    id={`Navbar-expand-${EXPAND_BREAKPOINT}`}
                    aria-labelledby={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}
                    placement='end'
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}>
                            {offCanvasTitle || brandTitle}
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='flex-row-reverse'>
                        <Nav className={`justify-content-around flex-row pb-4 pb-${EXPAND_BREAKPOINT}-0`}>
                            <Link to='signin'>
                                <Nav.Link as="div" className='flex-grow-1 text-center border border-dark border-end-0'>로그인</Nav.Link>
                            </Link>
                            <Link to='signup'>
                                <Nav.Link as="div" className='flex-grow-1 text-center border border-dark'>회원가입</Nav.Link>
                            </Link>
                        </Nav>
                        <Nav className='justify-content-start flex-grow-1 pe-3'>
                            <Link to='/'>
                                <Nav.Link as="div">Home</Nav.Link>
                            </Link>
                            <Link to='/board'>
                                <Nav.Link as="div">게시판</Nav.Link>
                            </Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}