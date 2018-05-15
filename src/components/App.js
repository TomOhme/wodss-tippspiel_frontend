import React from 'react';
import Header from '../containers/Header';
import Footer from './Footer';
import Main from './Main';
import Loading from './Loading';
import StatusBar from './StatusBar';
import { configuration } from '../Configuration';
import { connect } from 'react-redux';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    fetch('application.json').then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
      .then(file => {
        configuration.setValue('serverUrl', file.url);
      })
      .catch(ex => {
        console.log(ex);
        // TODO display error
      })
  }

  render() {
    return <div className="container">
      <Header />
      <StatusBar />
      {
        (this.props.isLoading) ? (<Loading />) : (<Main />)
      }
      <Footer />
    </div>
  }

}

const mapStateToProps = state => ({
  isLoading: state.isLoading
});

App = connect(mapStateToProps)(App)

export default App;