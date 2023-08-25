import { styled } from "styled-components"
import Hero from "../components/Home/Hero"
import Services from "../components/Home/Services"
import WorkExperience from "../components/Home/WorkExperience"
import Hiring from "../components/Home/Hiring"

const MarginedBody = styled.div`
    margin: 0 40px;
    @media screen and (max-width: 769px){
        margin: 0;
    }
`

const HomePage = () => {
  return (
    <>
        <MarginedBody>
            <Hero />
        </MarginedBody>
        <Services />
        <MarginedBody>
          <WorkExperience />
        </MarginedBody>
        <Hiring />
    </>
  )
}

export default HomePage