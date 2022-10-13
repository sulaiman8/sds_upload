import { Navbar, Container, Nav } from "react-bootstrap"
import React from 'react'

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">BERITA</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">TRENDING</Nav.Link>
            <Nav.Link href="#otomotif">OTOMOTIF</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar
