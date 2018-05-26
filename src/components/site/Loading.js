import React from 'react';
import { connect } from 'react-redux';
import spinner from '../../img/spinner.gif';
import { isLoading } from '../../actions';

const centerStyle = {
  textAlign: 'center'
};

let Loading = ({ stopLoading }) => (
  <div className="loading" onClick={() => stopLoading()} style={centerStyle}>
    <img className="spinner" src={spinner} height="64" alt="loading" />
  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    stopLoading: () => dispatch(isLoading(false))
  }
}

export default connect(null, mapDispatchToProps)(Loading)