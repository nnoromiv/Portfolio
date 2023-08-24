import { styled } from 'styled-components'
import IMAGE from '../../assets/img_2.png'
import Arrow from '../../assets/arrow.svg'
import Socials from '../Socials'
import STAR from '../../assets/star.png'

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: -2% 0 0 0;
`

const ArrowImage = styled.img`
    width: 50px;
    transform: translate(-90px, 40px) rotate(30deg);
    z-index: -1 
`
const GreetingCase = styled.h1`
    background-color: white;
    font-size: 20px;
    border: 1px solid black;
    padding: 5px 15px;
    border-radius: 30px;
    width: fit-content;
    margin: 2% 0 0 -7%;

    @media screen and (max-width: 769px){
        margin: 2% 0 0 -5%;
    }
`

const IntroText = styled.h1`
    margin: 1% 0 0 0;
    font-size: 70px;

    @media screen and (max-width: 1025px){
        font-size: 60px;
    }

    @media screen and (max-width: 769px){
        font-size: 55px
    }

    @media screen and (max-width: 426px){
        font-size: 40px;
    }

    @media screen and (max-width: 321px){
        font-size: 30px;
    }
`

export const IntroTextSpan = styled.span`
    color: var(--primary-color);
`

const InformationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: -5% 0 0 0;

    @media screen and (max-width: 769px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
    }
`

const Apostrophe = styled.strong`
    font-size: 300px;

    @media screen and (max-width: 1025px){
        font-size: 200px
    }

    @media screen and (max-width: 769px){
        display: none;
    }
`

const Text = styled.h6`
    margin: -45% 0 5% 0;
    font-size: 14px;
    width: 500px;

    @media screen and (max-width: 1025px){
        margin: -30% 0 5% 0;
    }

    @media screen and (max-width: 769px){
        display: none;
    }
`

const ImageContainer = styled.div`
    margin: -3% 0 0 -30%;

    @media screen and (max-width: 1025px){
        margin: -6% 0 0 0;
    }

    @media screen and (max-width: 769px){
        margin: -8% 0 0 0
    }
`

const InnerCircle = styled.div`
    position: absolute;
    width: 500px;
    height: 500px;
    border: 1px solid var(--primary-color);
    margin: 20% 0 0 -4%;
    background-color: var(--primary-color);
    z-index: -1;
    border-radius: 100%;

    @media screen and (max-width: 1025px){
        margin: 35% 0 0 -5%
    }

    @media screen and (max-width: 769px){
        margin: 50% 0 0 -5%
    }

    @media screen and (max-width: 426px){
        width: 400px;
        height: 400px;
        margin: 50% 0 0 -17%;
    }

    @media screen and (max-width: 376px){
        width: 320px;
        margin: 60% 0 0 -7%;
    }

    @media screen and (max-width: 321px){
        width: 300px;
        margin: 60% 0 0 -8%;
    }
`
const MyImage = styled.img`
    object-fit: contain;

    @media screen and (max-width: 426px){
        width: 250px
    }
`

const ExperienceContainer = styled.div`
    margin: 0 0 0 -10%;
    align-self: center;

    @media screen and (max-width: 1025px){
        align-self: flex-end;
    }

    @media screen and (max-width: 769px){
        display: none
    }
`

const EXPText = styled.h3`
    text-align: right;
    color: var(--primary-color);

    @media screen and (max-width: 1025px){
        display: none
    }
`

const Hero = () => {
  return (
    <>
        <Body>
            <ArrowImage src={Arrow} srcSet="" alt="pointer" />
            <GreetingCase>Hello!</GreetingCase>
            <IntroText>I&apos;m <IntroTextSpan>Nnorom,</IntroTextSpan></IntroText>
            <IntroText> Frontend Engineer</IntroText>
        </Body>
        <InformationContainer>
            <div>
                <Apostrophe>&ldquo;</Apostrophe>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum recusandae, ab laudantium, cumque quos vel eius fuga eveniet aliquid rem aspernatur pariatur! Hic dolorem sunt eius rerum voluptatem. Fugit!</Text>
                <Socials />
            </div>
            <ImageContainer>
                <InnerCircle></InnerCircle>
                <MyImage src={IMAGE} srcSet="" alt="Me" />
            </ImageContainer>
            <ExperienceContainer>
                <div style={{ textAlign:"right" }}>
                    <img src={STAR} srcSet="" alt="star" width="30px"/>
                    <img src={STAR} srcSet="" alt="star" width="30px"/>
                    <img src={STAR} srcSet="" alt="star" width="30px"/>
                    <img src={STAR} srcSet="" alt="star" width="30px"/>
                </div>
                <IntroText>6 Yrs</IntroText>
                <EXPText>Expert</EXPText>
            </ExperienceContainer>
           
        </InformationContainer>
    </>
  )
}

export default Hero