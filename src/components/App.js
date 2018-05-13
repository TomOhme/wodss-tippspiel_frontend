import React from 'react';
import Header from '../containers/Header';
import Footer from './Footer';
import Main from './Main';
import { configuration } from '../Configuration';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    fetch('application.json').then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
      .then(file => {
        let url = file.url;
        if (url.slice(-1) === '/') {
          url = url.slice(0, -1);
        }
        configuration.setValue('serverUrl', url);
      })
      .catch(ex => {
        console.log(ex);
        // TODO display error
      })
  }

  render() {
    return <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  }

}