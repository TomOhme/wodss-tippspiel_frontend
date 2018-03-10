import React from 'react'
import PropTypes from 'prop-types'

const Counter = ({ store }) => (
  <label>
    test: {store.i}
    </label>
)

Counter.propTypes = {
  state: PropTypes.node.isRequired
}

export default Counter;
