import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import './NavBar.css';

function NavBar() {
  const sizes = [false, "sm", "md", "lg", "xl", "xxl"];

  const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 90) {
                handleShow(true);
            }
            else {
                handleShow(false);
            }
        })
    }, []);

  return (
    <>
      {sizes.map((expand) => (
        <Navbar expand="lg" className={`bg-body-tertiary nav ${show && 'nav_show'}`} fixed="top">
          <Container>
            <Navbar.Brand href="/" className="m-auto nav-brand">Ace Eduville</Navbar.Brand>
            <a href="https://wa.me/9599193444" className="whatsapp_icon_mobile"><i className="fa fa-whatsapp" style={{fontSize: "24px"}}></i></a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-btn" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Ace Eduville
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="ms-auto">
                  <Nav.Link href="/" className="nav-link">Home</Nav.Link>
                  <Nav.Link href="/about" className="nav-link">About</Nav.Link>
                  <Nav.Link href="/course" className="nav-link">Course</Nav.Link>
                  <Nav.Link href="/contact" className="nav-link">Contact</Nav.Link>
                  <Nav.Link href="tel:9599193444"><i className="fa fa-phone" style={{ fontSize: "18px", marginRight: "1rem" }}></i> 9599193444</Nav.Link>
                  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
