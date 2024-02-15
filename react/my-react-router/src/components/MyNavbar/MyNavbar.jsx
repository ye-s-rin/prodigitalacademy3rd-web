import React, { useState, useEffect } from 'react';
import { Container, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
const EXPAND_BREAKPOINT = 'md';

export default function MyNavbar({ brandTitle, offCanvasTitle }) {
    const [display, setDisplay] = useState("flex");
    const location = useLocation();

    useEffect(() => {
        let dis = localStorage.getItem("signin");
        if (dis != null) { setDisplay(dis); };
    }, [localStorage.getItem("signin")]);

    const handleLogout = () => {
        localStorage.setItem("signin", "flex");
    };

    console.log("display: ", display);
    console.log("local storage: ", localStorage.getItem("signin"))

    return (
        <Navbar expand={EXPAND_BREAKPOINT} className='mb-3' sticky='top' bg='dark' variant='dark'>
            <Container fluid>
                <Link to='/' className="text-decoration-none">
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
                            <div style={{ display: display, flexDirection: 'row' }}>
                                <Link to='signin' className="text-decoration-none">
                                    <Nav.Link as="div" className='flex-grow-1 text-center border border-dark border-end-0'>로그인</Nav.Link>
                                </Link>
                                <Link to='signup' className="text-decoration-none">
                                    <Nav.Link as="div" className='flex-grow-1 text-center border border-dark'>회원가입</Nav.Link>
                                </Link>
                            </div>
                            <div style={{ display: display === "flex" ? "none" : "flex" }}>
                                <Link to='/' className="text-decoration-none">
                                    <Nav.Link
                                        as="div"
                                        className='flex-grow-1 text-center border border-dark'
                                        onClick={handleLogout}>로그아웃</Nav.Link>
                                </Link>
                            </div>
                        </Nav>
                        <Nav className='justify-content-start flex-grow-1 pe-3'>
                            <Link to='/' className="text-decoration-none">
                                <Nav.Link as="div">Home</Nav.Link>
                            </Link>
                            <Link to='/board' className="text-decoration-none">
                                <Nav.Link as="div">게시판</Nav.Link>
                            </Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}