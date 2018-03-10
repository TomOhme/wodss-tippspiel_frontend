import React from 'react'
import { connect } from 'react-redux';
import { getGroup } from '../actions';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';

let Bets = ({currentGroup}) => (
    <div>
        {currentGroup} TODO
    </div>
);

const mapStateToProps = state => ({
    currentGroup: state.group.currentGroup,
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});

Bets = connect(mapStateToProps)(Bets)

export default Bets;