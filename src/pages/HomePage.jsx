import { styled } from "styled-components"
import Hero from "../components/Home/Hero"
import Services from "../components/Home/Services"
import WorkExperience from "../components/Home/WorkExperience"
import Hiring from "../components/Home/Hiring"
import Portfolio from "../components/Home/Portfolio"
import Blog from "../components/Home/Blog"
import Footer from "../components/Home/Footer"

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
        <MarginedBody>
          <Portfolio />
        </MarginedBody>
        <Blog />
        <Footer />
    </>
  )
}

export default HomePage