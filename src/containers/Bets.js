import React from 'react'
import { connect } from 'react-redux';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';

import Game from './Game';

let Bets = ({ currentRound, bets }) => (
    <div>
        {currentRound} TODO

        {
            Object.keys(bets).map(key => {
                return <Game id={key} key={key} />
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