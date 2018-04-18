import React from 'react'
import { connect } from 'react-redux';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';

import Game from './Game';

let Bets = ({ currentGroup, bets }) => (
    <div>
        {currentGroup} TODO

        {
            Object.keys(bets).map(key => {
                return <Game id={key} key={key} />
            })
        }
    </div>
);

const mapStateToProps = state => ({
    currentGroup: state.group.currentGroup,
    bets: state.group.bets,
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});

Bets = connect(mapStateToProps)(Bets)

export default Bets;