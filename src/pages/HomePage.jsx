import { styled } from "styled-components"
import Hero from "../components/Home/Hero"
import Services from "../components/Home/Services"

const MarginedBody = styled.div`
    margin: 0 40px;
    @media screen and (max-width: 769px){
        margin: 0 20px;
    }
`

const HomePage = () => {
  return (
    <>
        <MarginedBody>
            <Hero />
        </MarginedBody>
        <Services />
    </>
  )
}

export default HomePage