import { styled } from 'styled-components'
import LINE from '../../assets/line.svg'
import TypeWriting from '../TypeWriting'
import { IntroText } from './Hero'

const Body = styled.div`
    height: 100% !important;
    padding: 20px 0;
`

const ContainerLarge = styled.div`
    display: flex;

    @media screen and (max-width: 769px){
        display: none
    }
`

const ContainerMedium = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 769px){
        display: none
    }
`
const Company = styled.div`
    margin: 6% 0 0 0;
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 1025px){
        width: 40%
    }

    @media screen and (max-width: 769px){
        margin: 10% 0 0 0;
        width: fit-content;
    }

    @media screen and (max-width: 426px){
        margin: 15px 20px;
    }
`

const H2 = styled.h2`
    font-size: 30px;

    @media screen and (max-width: 769px){
        font-size: 20px !important;
    }

    @media screen and (max-width: 426px){
        color: var(--primary-color);
        font-size: 24px !important;
    }
`

const P = styled.p`
    font-weight: 500;

    @media screen and (max-width: 769px){
        font-weight: 400;
    }
`

const WorkExp = styled.div`
    margin: 6% 0 0 0;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 1025px){
        width: 60%
    }
`

const MyImage =  styled.img`
    width: fit-content;
    object-fit: contain;

    @media screen and (max-width: 769px){
        width: 20%;
    }

    @media screen and (max-width: 426px){
        display: none;
    }
`


const MiddleLine = () => {
    return (
        <MyImage src={LINE} srcSet="" alt="Divider" />    
    )
}

const TypewriterStrings = [' Experience', ' Adventure']

const WorkExperience = () => {
  return (
    <Body>
        <IntroText>My Work&nbsp;<TypeWriting ArrayOfStrings={TypewriterStrings} /></IntroText> 
        <ContainerLarge>
        <Company>
            <div>
                <H2>Self Employed, NYC</H2>
                <P> Sept. 2022-2023 </P>
            </div>
            <div>
                <H2>Self Employed, NYC</H2>
                <P> Sept. 2022-2023 </P>
            </div>
            <div>
                <H2>Self Employed, NYC</H2>
                <P> Sept. 2022-2023 </P>
            </div>
        </Company>
        <MiddleLine />
        <WorkExp>
            <div>
                <H2>Visual Designer</H2>
                <P> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora fuga harum incidunt mollitia fugiat distinctio inventore exercitationem possimus </P>
            </div>
            <div>
                <H2>Visual Designer</H2>
                <P> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora fuga harum incidunt mollitia fugiat distinctio inventore exercitationem possimus </P>
            </div>
            <div>
                <H2>Visual Designer</H2>
                <P> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora fuga harum incidunt mollitia fugiat distinctio inventore exercitationem possimus </P>
            </div>
        </WorkExp>
        </ContainerLarge>

        <ContainerMedium>
        <MiddleLine />
        <Company>
            <div>
                <H2>Self Employed, NYC</H2>
                <P> Sept. 2022-2023 </P>
            </div>
            <div>
                <H2>Visual Designer</H2>
                <P> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora fuga harum incidunt mollitia fugiat distinctio inventore exercitationem possimus </P>
            </div>
            <div>
                <H2>Self Employed, NYC</H2>
                <P> Sept. 2022-2023 </P>
            </div>
            <div>
                <H2>Visual Designer</H2>
                <P> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora fuga harum incidunt mollitia fugiat distinctio inventore exercitationem possimus </P>
            </div>
            <div>
                <H2>Self Employed, NYC</H2>
                <P> Sept. 2022-2023 </P>
            </div>
                        <div>
                <H2>Visual Designer</H2>
                <P> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora fuga harum incidunt mollitia fugiat distinctio inventore exercitationem possimus </P>
            </div>
        </Company>
        </ContainerMedium>
    </Body>
  )
}

export default WorkExperience