import React from 'react';
import { connect } from 'react-redux';
import { setGroup } from '../actions';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import Bets from './Bets';

import {
    Nav,
    NavItem
} from 'react-bootstrap';

let BetNavigation = ({ dispatch, translate, currentLanguage, group, currentGroup }) => (
    <div>
        <Nav bsStyle="tabs" activeKey={currentGroup} onSelect={this.handleSelect}>
            <NavItem eventKey={"A"} onSelect={() => { dispatch(setGroup("A")) }} >
                {translate('group')} A
                </NavItem>
            <NavItem eventKey={"B"} onSelect={() => { dispatch(setGroup("B")) }}>
                {translate('group')} B
                </NavItem>
            <NavItem eventKey={"C"} onSelect={() => { dispatch(setGroup("C")) }}>
                {translate('group')} C
                </NavItem>
            <NavItem eventKey={"D"} onSelect={() => { dispatch(setGroup("D")) }}>
                {translate('group')} D
                </NavItem>
            <NavItem eventKey={"E"} onSelect={() => { dispatch(setGroup("E")) }}>
                {translate('group')} E
                </NavItem>
            <NavItem eventKey={"F"} onSelect={() => { dispatch(setGroup("F")) }}>
                {translate('group')} F
                </NavItem>
            <NavItem eventKey={"G"} onSelect={() => { dispatch(setGroup("G")) }}>
                {translate('group')} G
                </NavItem>
            <NavItem eventKey={"H"} onSelect={() => { dispatch(setGroup("H")) }}>
                {translate('group')} H
                </NavItem>
            <NavItem eventKey={"ro16"} onSelect={() => { dispatch(setGroup("ro16")) }}>
                {translate('ro16')}
            </NavItem>
            <NavItem eventKey={"quarter"} onSelect={() => { dispatch(setGroup("quarter")) }}>
                {translate('quarterfinals')}
            </NavItem>
            <NavItem eventKey={"semi"} onSelect={() => { dispatch(setGroup("semi")) }}>
                {translate('semifinals')}
            </NavItem>
            <NavItem eventKey={"finals"} onSelect={() => { dispatch(setGroup("finals")) }}>
                {translate('finals')}
            </NavItem>
        </Nav>
        <Bets props={group} />
    </div>
);

const mapStateToProps = state => ({
    group: state.group,
    currentGroup: state.group.currentGroup,
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});

BetNavigation = connect(mapStateToProps)(BetNavigation)

export default BetNavigation;