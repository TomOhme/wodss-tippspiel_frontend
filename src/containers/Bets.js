import React from 'react'
import { connect } from 'react-redux';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import _ from 'underscore';

import Game from './Game';

import { getGames } from '../actions/BetActions';

import {
    Button,
    Glyphicon
} from 'react-bootstrap';

let Bets = ({ currentRound, bets, getGames }) => (
    <div>
        <Button onClick={() => { getGames() }}>
            <Glyphicon glyph="refresh" />
        </Button>

        {
            /*
           Object.values(bets[currentRound]).map(game => {
                return <Game round={currentRound} game={game} key={game.id} />
           }) 
           */
            /*
              _.each(bets[currentRound], function (bet) {
                  return <Game round={currentRound} game={bet} key={bet.homeTeamName + bet.awayTeamName} />
              })
              */
            // TODO
            Object.values(bets[currentRound]).map(bet => {
                return <Game round={currentRound} game={bet} key={bet.homeTeamName + bet.awayTeamName} />
            })
        }
    </div>
);

const mapStateToProps = state => ({
    currentRound: state.round.currentRound,
    bets: state.bets,
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});

const mapDispatchToProps = dispatch => {
    return {
        getGames: () => dispatch(getGames())
    }
}

Bets = connect(mapStateToProps, mapDispatchToProps)(Bets)

export default Bets;