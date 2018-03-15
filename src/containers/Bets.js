import React from 'react'
import { connect } from 'react-redux';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';

import Game from './Game';

let Bets = ({currentGroup}) => (
    <div>
        {currentGroup} TODO
        <Game props={{home: "swi", guest: "ger"}} />
        <Game props={{home: "kor", guest: "ser"}} />
    </div>
);

const mapStateToProps = state => ({
    currentGroup: state.group.currentGroup,
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});

Bets = connect(mapStateToProps)(Bets)

export default Bets;