import { Container, Navbar, Nav } from "react-bootstrap"
import OpenMenu from '../assets/open-menu.svg'
import Logo from '../assets/logo.svg'
import { styled } from "styled-components"
import Darkmode from "./Darkmode"
import { useState } from 'react'

const Images = styled.img`
    width: 30px;
`


const NavBar = () => {
    const [expand, setExpand] = useState(false)  
    
  return (
    <>
        <Navbar expand="md" expanded={expand} id="navbar-large">
        <Container fluid>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => { setExpand(expand ? false : "expanded") }}>
                <Images src={OpenMenu} srcSet="" alt="Menu"  />
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav" placement="end" >            
                <Nav activeKey="/">
                    <Nav.Item>
                        <Nav.Link href="/">
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            About
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            Service
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand>
                <Images src={Logo} srcSet="" alt="Logo" style={{ width: "50px" }} />
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className='navbar-right' placement="end" >            
                <Nav>
                    <Nav.Item>
                        <Nav.Link>
                            Resume
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            Project
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            Contact Us
                        </Nav.Link>
                    </Nav.Item>
                    <Darkmode showImage={true} />
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

        <Navbar expand="md" expanded={expand} id="navbar-sm">
        <Container fluid>
            <Navbar.Toggle aria-controls="responsive-navbar-nav-sm" onClick={() => { setExpand(expand ? false : "expanded") }}>
                <Images src={OpenMenu} srcSet="" alt="Menu"  />
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav-sm" placement="end" >            
                <Nav activeKey="/">
                    <Nav.Item>
                        <Nav.Link href="/">
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            About
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            Service
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link>
                        Resume
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        Project
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        Contact Us
                    </Nav.Link>
                </Nav.Item>
                </Nav>
                
                <Darkmode showImage={true} />
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
  )
}

export default NavBar