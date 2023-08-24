import { styled } from 'styled-components'
import XLOGO from '../assets/twitterx-dark.svg'
import LINKEDINLOGO from '../assets/linkedin-color.svg'
import GITHUBLOGO from '../assets/github-dark.svg'

const Body = styled.div`
    @media screen and (max-width: 769px){
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`


const LogoImage = styled.img`
    cursor: pointer;
    width: 60px !important;
    margin: 10px 5% 0 0;

    @media screen and (max-width: 769px){
        width: 40px !important;
    }
`

const Socials = () => {
  return (
    <Body>
        <a href="https://twitter.com/nnoromiv" target="_blank" rel="noreferrer">
            <LogoImage src={XLOGO} srcSet="" alt="x" />
        </a>
        <a href="https://www.github.com/nnoromiv" target="_blank" rel="noreferrer">
            <LogoImage src={GITHUBLOGO} srcSet="" alt="x" />
        </a>
        <a href="https://www.linkedin.com/in/christian-nnorom-63b9a0159/" target="_blank" rel="noreferrer">
            <LogoImage src={LINKEDINLOGO} srcSet="" alt="x" />
        </a>
    </Body>
  )
}

export default Socials