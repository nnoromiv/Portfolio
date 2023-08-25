import PropTypes from 'prop-types'
import Typewriter from 'typewriter-effect'

function TypeWriting(props) {
  return (
    <Typewriter options={{
      strings: props.ArrayOfStrings,
      autoStart: true,
      loop: true,
      deleteSpeed: 50
    }}/>
  )
}

TypeWriting.propTypes = {
  ArrayOfStrings: PropTypes.array
}

export default TypeWriting