import { Container, Navbar, Nav } from "react-bootstrap"
import OpenMenu from '../assets/open-menu.svg'
import Logo from '../assets/logo.svg'
import { styled } from "styled-components"
import Darkmode from "./Darkmode"
import { useState } from 'react'
import { NAV_LINKS } from "./Export"

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
                    {
                        NAV_LINKS.slice(0,3).map((nav, index) => {
                            return(
                                <Nav.Item key={index}>
                                    <Nav.Link href="/">
                                        {nav.name}
                                    </Nav.Link>
                                </Nav.Item>
                            )
                        })
                    }
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand>
                <Images src={Logo} srcSet="" alt="Logo" style={{ width: "50px" }} />
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className='navbar-right' placement="end" >            
                <Nav activeKey="/">
                    {
                        NAV_LINKS.slice(3,).map((nav, index) => {
                            return(
                                <Nav.Item key={index}>
                                    <Nav.Link href="/">
                                        {nav.name}
                                    </Nav.Link>
                                </Nav.Item>
                            )
                        })
                    }
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
                    {
                        NAV_LINKS.map((nav, index) => {
                            return(
                                <Nav.Item key={index}>
                                    <Nav.Link href="/">
                                        {nav.name}
                                    </Nav.Link>
                                </Nav.Item>
                            )
                        })
                    }
                </Nav>                
                <Darkmode showImage={true} />
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
  )
}

export default NavBar