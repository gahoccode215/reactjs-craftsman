import { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Orchids from './Orchids'

function App() {

  return (
    <>
        <Navbar expand="lg" className='bg-body-tertiary'>
          <Container>
            <Navbar.Brand href='#home'>Single Page Apllication</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href='#link'>Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="mt-4">
          <Orchids />
        </Container>
    </>
  )
}

export default App
