import React from 'react';
import { connect } from 'react-redux';

import { configuration } from '../Configuration';
import Header from '../containers/Header';
import Footer from './Footer';
import Main from './Main';
import Loading from './Loading';
import StatusBar from './StatusBar';
import { getPlayerRankingFromServer } from '../actions/PlayerRankingActions';
import { getGroupRankingFromServer } from '../actions/BetGroupActions';
import { getGames } from '../actions/BetActions';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.getGames = props.getGames;
        console.log(this.getGames);
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
            .then(() => {
                // load general data
                console.log("test");
                this.props.getGames();
                this.props.getPlayerRankingFromServer();
                this.props.getGroupRankingFromServer();
            })
            .catch(ex => {
                console.log(ex);
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

const mapDispatchToProps = dispatch => ({
    getPlayerRankingFromServer: () => dispatch(getPlayerRankingFromServer()),
    getGroupRankingFromServer: () => dispatch(getGroupRankingFromServer()),
    getGames: () => dispatch(getGames())
});

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;