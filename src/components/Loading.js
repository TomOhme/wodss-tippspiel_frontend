import React from 'react';
import spinner from '../img/spinner.gif';

const centerStyle = {
  textAlign: 'center'
};

const Loading = () => (
  <div className="loading" style={centerStyle}>
    <img className="spinner" src={spinner} height="64" alt="loading" />
  </div>
);

export default Loading;