import React from 'react';
import Header from '../containers/Header';
import Footer from './Footer';
import Main from './Main';
import Loading from './Loading';
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
      {console.log(this.props.isLoading)}
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