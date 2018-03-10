import React from 'react';
import { connect } from 'react-redux';
import { add, getGroup } from '../actions';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import CounterLabel from './CounterLabel';
import Bets from './Bets';

import {
    Nav,
    NavItem
} from 'react-bootstrap';

let BetNavigation = ({ dispatch, translate, currentLanguage, group, currentGroup }) => {
    let input

    return (
        <div>
            <Nav bsStyle="tabs" activeKey={currentGroup} onSelect={this.handleSelect}>
                <NavItem eventKey={"A"} onSelect={ () => {dispatch(getGroup("A"))} } >
                    {translate('group')} A
                </NavItem>
                <NavItem eventKey={"B"} onSelect={ () => {dispatch(getGroup("B"))} }>
                    {translate('group')} B
                </NavItem>
                <NavItem eventKey={"C"} onSelect={ () => {dispatch(getGroup("C"))} }>
                    {translate('group')} C
                </NavItem>
                <NavItem eventKey={"D"} onSelect={ () => {dispatch(getGroup("D"))} }>
                    {translate('group')} D
                </NavItem>
                <NavItem eventKey={"E"} onSelect={ () => {dispatch(getGroup("E"))} }>
                    {translate('group')} E
                </NavItem>
                <NavItem eventKey={"F"} onSelect={ () => {dispatch(getGroup("F"))} }>
                    {translate('group')} F
                </NavItem>
                <NavItem eventKey={"G"} onSelect={ () => {dispatch(getGroup("G"))} }>
                    {translate('group')} G
                </NavItem>
                <NavItem eventKey={"H"} onSelect={ () => {dispatch(getGroup("H"))} }>
                    {translate('group')} H
                </NavItem>
                <NavItem eventKey={"ro16"} onSelect={ () => {dispatch(getGroup("ro16"))} }>
                    {translate('ro16')}
                </NavItem>
                <NavItem eventKey={"quarter"} onSelect={ () => {dispatch(getGroup("quarter"))} }>
                    {translate('quarterfinals')}
                </NavItem>
                <NavItem eventKey={"semi"} onSelect={ () => {dispatch(getGroup("semi"))} }>
                    {translate('semifinals')}
                </NavItem>
                <NavItem eventKey={"finals"} onSelect={ () => {dispatch(getGroup("finals"))} }>
                    {translate('finals')}
                </NavItem>
            </Nav>
            <Bets props={group} />
        </div>
    )
}

const mapStateToProps = state => ({
    group: state.group,
    currentGroup: state.group.currentGroup,
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});

BetNavigation = connect(mapStateToProps)(BetNavigation)

export default BetNavigation;