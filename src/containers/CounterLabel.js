import React from 'react'
import { connect } from 'react-redux';

let CounterLabel = ({ counter }) => (
    <label>
        {counter}
    </label>
);

const getCounter = (counter) => {
    return counter;
}

const mapStateToProps = (state) => ({
    counter: state.counter
})
  
export default CounterLabel = connect(
      mapStateToProps
)(CounterLabel)