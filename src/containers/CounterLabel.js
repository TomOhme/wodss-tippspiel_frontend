import React from 'react'
import { connect } from 'react-redux';

let CounterLabel = ({ counter }) => (
    <label>
        {counter.i}
    </label>
);

const mapStateToProps = (state) => ({
    counter: state.counter
})
  
export default CounterLabel = connect(
      mapStateToProps
)(CounterLabel)