import { connect } from 'react-redux'
import Counter from '../components/Counter';

const mapStateToProps = (store) => ({
})

const CounterLabel = connect(
    mapStateToProps
)(Counter)


export default CounterLabel;