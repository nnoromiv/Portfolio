import { styled } from 'styled-components'
import PropTypes from 'prop-types'
import { Spinner } from 'react-bootstrap'

const Preload = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`

const Preloader = (props) => {
  return (
    <>
        {
            props.load &&
            <Preload>               
                <Spinner animation="grow" style={{ color: 'var(--primary-color)'}}/>
            </Preload>
        }
    </>
  )
}

Preloader.propTypes = {
    load: PropTypes.bool.isRequired
}

export default Preloader