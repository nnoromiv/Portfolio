// import PropTypes from 'prop-types'
import Typewriter from 'typewriter-effect'

function TypeWriting() {
  return (
    <Typewriter options={{
      strings: [
        "Hi",
        "My name is",
        "Nnorom Christian",
        'Call me Nnorom'
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50
    }}/>
  )
}

// TypeWriting.propTypes = {}

export default TypeWriting