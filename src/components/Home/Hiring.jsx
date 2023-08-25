import { styled } from "styled-components"
import IMAGE from '../../assets/img_2.png'
import { GreetingCase, IntroTextSpan, IntroText, Text } from  './Hero'

const Body = styled.div`
    padding: 40px;
    background-color: var(--inverted-hero-bg-color);
    border-radius: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 1025px){
        gap: 10px;
        flex-direction: column;
    }

    @media screen and (max-width: 769px){
        padding: 40px 20px;
    }
`

const ImageContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
`

const MyImage = styled.img`
    object-fit: contain;
    width: 500px;
    height: 500px;
    background-color: var(--primary-color);
    border-radius: 100%;

    @media screen and (max-width: 769px){
        border-radius: 70% 20% 60% 10%;
    }

    @media screen and (max-width: 426px){
        border-radius: 30% 80% 40% 20%;
        width: 400px;
        height: 400px;
    }

    @media screen and (max-width: 376px){
        width: 320px;
    }

    @media screen and (max-width: 321px){
        width: 300px;
    }
`

const TextContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1025px){
        width: 100%;
        text-align: left;
    }
`

const Hiring = () => {
  return (
    <Body>
        <ImageContainer>
            <MyImage src={IMAGE} srcSet="" alt="Me" />
        </ImageContainer>
        <TextContainer>
            <IntroText style={{ display: 'block', textAlign: 'left'}}>Why You Would<IntroTextSpan> Hire Me</IntroTextSpan> For Your Next Projects?</IntroText>
            <Text style={{ display: 'block', margin: '10px 0 20px 0', width: '100%' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nulla modi nemo ea odit itaque voluptatum molestias? Minima rem, nobis libero voluptates quae eum cupiditate nesciunt laborum doloremque possimus suscipit.</Text>
            <GreetingCase style={{ margin: '0', color: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}>Hire Me</GreetingCase>
        </TextContainer>
    </Body>
  )
}

export default Hiring