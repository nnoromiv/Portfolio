import { keyframes, styled } from 'styled-components'
import Logo from '../assets/logo.svg'
import PropTypes from 'prop-types'
import Darkmode from './Darkmode'

const scale = keyframes`
    0% {
        transform: scale(600%);
    }
    50% {
        transform: scale(400%)
    }
    100% {
        transform: scale(600%);
    }
`
const Preload = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`

const PreloaderImage = styled.img`
    animation: ${scale} 5s linear infinite;
`

const Preloader = (props) => {
    const currentTheme = localStorage.getItem('selectedTheme')
  return (
    <>
        {
            props.load ? 
            <Preload>
                <Darkmode showImage={false} />
                {
                    currentTheme === "dark" ?
                        <PreloaderImage src={Logo} srcSet="" alt="Loading" />
                    :
                        <PreloaderImage src={Logo} srcSet="" alt="Loading" />
                }
            </Preload>
            :
            <></>
        }
    </>
  )
}

Preloader.propTypes = {
    load: PropTypes.bool.isRequired
}

export default Preloader