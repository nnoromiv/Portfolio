import { Card } from "react-bootstrap"
import THUMBNAIL from "../../assets/Thumbnail.png"
import THUMBNAIL2 from "../../assets/Thumbnail1.png"
import { styled } from "styled-components"
import { IntroTextSpan } from './Hero'

const Body = styled.div`
    padding: 40px;
    background-color: var(--hero-bg-color);
    border-radius: 30px;
    height: fit-content;

    @media screen and (max-width: 769px){
        padding: 40px 20px;
    }
`

const IntroText = styled.h1`
    font-size: 50px;
    color: white;
    width: 70%

    @media screen and (max-width: 500px){
        width: 100%
    }
`

const HeaderInformation = styled.div`
    display: flex;
    justify-content: space-between;    
    margin: 0 0 3% 0;

    @media screen and (max-width: 500px){
        flex-direction: column;
    }
`

const HeaderText = styled.h6`
    color: white;
    width: 30%;
    text-align: right;

    @media screen and (max-width: 500px){
        text-align: left;
        width: 100%
    }
`

const Cards = styled.div`
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); /* Adjust column size as needed */
    justify-content: center;
    gap: 3%;
    align-items: center;
`

const DemoButton = styled.h1`
    position: absolute;
    font-size: 40px;
    border-radius: 150px;
    bottom: 0;
    right: 0;
    border: 20px solid var(--hero-bg-color);
    padding: 60px 30px;
    color: white;
    text-align: center;
    background-color: #484848;
    margin: 0 -35px -24px 0;

    &:hover {
        transform: scale(120%);
    }

    @media screen and (max-width: 1025px){
        font-size: 30px;
        padding: 50px 25px;
        margin: 0 -35px 0 0;
    }

    @media screen and (max-width: 500px){
        border: 10px solid var(--hero-bg-color);
        padding: 25px 10px;
        font-size: 20px;
        margin: 0 -1px 0 0;
    }
`

const Services = () => {
  return (
    <Body>
        <HeaderInformation>
            <IntroText>My<IntroTextSpan> Services</IntroTextSpan></IntroText>
            <HeaderText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum placeat non a, eius id s</HeaderText>
        </HeaderInformation>
        <Cards>
            <Card>
                <Card.Header>UI/UX Design</Card.Header>
                <Card.Body>
                    <Card.Img src={THUMBNAIL} srcSet="" alt="" />
                </Card.Body>
                <DemoButton>Go In</DemoButton>
            </Card>
            <Card className="Orange">
                <Card.Header>Web Design</Card.Header>
                <Card.Body>
                    <Card.Img src={THUMBNAIL2} srcSet="" alt="" />
                </Card.Body>
                <DemoButton className="Orange">Go In</DemoButton>
            </Card>
            <Card>
                <Card.Header>Free Lance Gigs</Card.Header>
                <Card.Body>
                    <Card.Img src={THUMBNAIL} srcSet="" alt="" />
                </Card.Body>
                <DemoButton>Go In</DemoButton>
            </Card>
        </Cards>
    </Body>
  )
}

export default Services