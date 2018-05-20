import React from 'react'
import { connect } from 'react-redux';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import _ from 'underscore';

import Game from './Game';

let Bets = ({ currentRound, bets }) => (
    <div>
        {/* <Game game={bets["A"][0]} key={0} /> */}
        {
            /*
            _.each(bets["A"], (game) => {
                return <Game game={game} key={game.id} />
            })
            */
           Object.values(bets[currentRound]).map(game => {
                console.log(bets["A"])
                return <Game game={game} key={game.id} />
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

Bets = connect(mapStateToProps)(Bets)

export default Bets;