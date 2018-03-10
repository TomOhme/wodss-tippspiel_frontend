import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { add } from '../actions'
import Counter from '../components/Counter';

const mapStateToProps = (store) => ({
})

const CounterLabel = connect(
    mapStateToProps
)(Counter)


export default CounterLabel;