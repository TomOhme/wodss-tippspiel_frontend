import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Bets from './Bets';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header></Header>
        <Bets></Bets>
        <Footer></Footer>
      </div>
    );
  }
}