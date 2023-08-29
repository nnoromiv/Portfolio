import { Header } from "./Portfolio"
import { IntroText, GreetingCase, IntroTextSpan } from "./Hero"
import { Body } from "./Services"
import Socials from "../Socials"
import { styled } from "styled-components"
import { Nav } from "react-bootstrap"
import { NAV_LINKS } from "../Export"
import LOGO from '../../assets/logo.svg'

const P = styled.p`
    font-weight: 500;
    color: var(--inverted-text-color);

    @media screen and (max-width: 769px){
        font-weight: 400;
    }
`

const MiddleContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    justify-items: left;
    gap: 3%;
    @media screen and (max-width: 769px){
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)) !important;
    }

    @media screen and (max-width: 500px){
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)) !important;
    }
`

const CopyRight = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0 0 0
`

const Footer = () => {
  return (
    <Body style={{ marginTop: '90px', borderRadius: '30px 30px 0 0', paddingBottom: '5px'}}>
        <Header style={{ margin: '0 0 20px 0'}}>
            <IntroText style={{ display: 'block', textAlign: 'left', color: 'var(--inverted-text-color)'}}>Lets Connect There </IntroText>
            <GreetingCase style={{ margin: '0', height: 'fit-content', color: 'var(--inverted-text-color)', backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)'}}>Connect</GreetingCase>
        </Header>
        <hr style={{color: 'white' }}/>
        <MiddleContainer>
        <div>
            <div style={{ display: 'flex'}}>
                <img src={LOGO} srcSet="" alt="Logo" />{" "}<IntroText style={{ color: 'var(--inverted-text-color)', margin: '20px 0 0 0'}}>IV<IntroTextSpan>.</IntroTextSpan></IntroText>
            </div>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, eligendi sapiente eveniet hic, pariatur culpa beatae recusandae neque ipsam voluptates, quasi iure molestiae dolor dolores. Laudantium est quam exercitationem tempore.</P>
            <Socials />
        </div>
        <div>
            <IntroTextSpan style={{ fontWeight: '800'}} >Navigation</IntroTextSpan>
            {
                    NAV_LINKS.map((nav, index) => {
                        return(
                            <Nav.Item key={index} style={{margin: '0 0 10px 10px'}}>
                                <Nav.Link href="/">
                                    {nav.name}
                                </Nav.Link>
                            </Nav.Item>
                        )
                    })
                }
        </div>
        <div>
            <IntroTextSpan style={{ fontWeight: '800'}}>Contact</IntroTextSpan>
            <ol>
                <li>+234 708 357 3870</li>
                <li>www.nnorom.netlify.app</li>
                <li>nnorom.prince44@gmail.com</li>
            </ol>
        </div>
        </MiddleContainer>
        <hr style={{color: 'white', marginTop: '10px' }}/>
        <CopyRight>
            <P>
                Copyright © 2023 IV. All Rights Reserved
            </P>
        </CopyRight>
    </Body>
  )
}

export default Footer