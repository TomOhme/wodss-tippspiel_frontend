import React from 'react';
import { connect } from 'react-redux';
import { setRound } from '../actions/BetActions';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import Bets from './Bets';

import {
    Nav,
    NavItem
} from 'react-bootstrap';

let BetNavigation = ({ dispatch, translate, currentLanguage, group, currentGroup }) => (
    <div>
        <Nav bsStyle="tabs" 
                className="bet-navigation"
                activeKey={currentGroup} 
                onSelect={this.handleSelect}>
            <NavItem eventKey={"A"} onSelect={() => { dispatch(setRound("A")) }} >
                {translate('group')} A
                </NavItem>
            <NavItem eventKey={"B"} onSelect={() => { dispatch(setRound("B")) }}>
                {translate('group')} B
                </NavItem>
            <NavItem eventKey={"C"} onSelect={() => { dispatch(setRound("C")) }}>
                {translate('group')} C
                </NavItem>
            <NavItem eventKey={"D"} onSelect={() => { dispatch(setRound("D")) }}>
                {translate('group')} D
                </NavItem>
            <NavItem eventKey={"E"} onSelect={() => { dispatch(setRound("E")) }}>
                {translate('group')} E
                </NavItem>
            <NavItem eventKey={"F"} onSelect={() => { dispatch(setRound("F")) }}>
                {translate('group')} F
                </NavItem>
            <NavItem eventKey={"G"} onSelect={() => { dispatch(setRound("G")) }}>
                {translate('group')} G
                </NavItem>
            <NavItem eventKey={"H"} onSelect={() => { dispatch(setRound("H")) }}>
                {translate('group')} H
                </NavItem>
            <NavItem eventKey={"ro16"} onSelect={() => { dispatch(setRound("ro16")) }}>
                {translate('ro16')}
            </NavItem>
            <NavItem eventKey={"ro8"} onSelect={() => { dispatch(setRound("ro8")) }}>
                {translate('ro8')}
            </NavItem>
            <NavItem eventKey={"semi"} onSelect={() => { dispatch(setRound("semi")) }}>
                {translate('semifinals')}
            </NavItem>
            <NavItem eventKey={"finals"} onSelect={() => { dispatch(setRound("finals")) }}>
                {translate('finals')}
            </NavItem>
        </Nav>
        <Bets />
    </div>
);

const mapStateToProps = state => ({
    round: state.round,
    currentRound: state.round.currentRound,
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});

BetNavigation = connect(mapStateToProps)(BetNavigation)

export default BetNavigation;