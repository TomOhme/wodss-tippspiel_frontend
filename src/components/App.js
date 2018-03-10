import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Bets from '../containers/Bets';

const App = () => (
  <div className="container">
    <Header />
    <Bets />
    <Footer />
  </div>
)

export default App;