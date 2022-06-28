import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import profil from "../foto/profil.png"
import {Navbar, NavDropdown, Nav,Container, NavLink, Button, Offcanvas,Form, FormControl} from "react-bootstrap";
import {Link} from "react-router-dom";

const Navbar1 = () => {
    return(
        <div>
            <>
                {[false].map((expand) => (
                    <Navbar key={expand} bg="success" expand={expand} className="mb-3">
                        <Container fluid>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Nav.Link href="Obat">HOME</Nav.Link>
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="start"
                            >
                                <Offcanvas.Header closeButton style={{marginRight:"10px"}}>
                                    <Offcanvas.Title  >
                                        <img
                                            alt=""
                                            src={profil}
                                            width="100px"
                                            height="100px"
                                        />
                                        Apotek Vila
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link href="Pelanggan">Pelanggan</Nav.Link>
                                        <Nav.Link href="Transaksi">Transaksi</Nav.Link>
                                        <Nav.Link href="Log Out">Log Out</Nav.Link>

                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>

                ))}
            </>

        </div>
    )
}
export default Navbar1;