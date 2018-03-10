import React from 'react';
import { connect } from 'react-redux';
import { add } from '../actions';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import CounterLabel from './CounterLabel';

import {
    Nav,
    NavItem,
    Button
} from 'react-bootstrap';

let Bets = ({ dispatch, translate, currentLanguage }) => {
    let input

    return (
        <div>
            <Nav bsStyle="tabs" activeKey={1} onSelect={this.handleSelect}>
                <NavItem eventKey={1}>
                    {translate('groupa')}
                </NavItem>
                <NavItem eventKey={2}>
                    {translate('groupb')}
                </NavItem>
                <NavItem eventKey={3}>
                    {translate('groupc')}
                </NavItem>
                <NavItem eventKey={4}>
                    {translate('groupd')}
                </NavItem>
                <NavItem eventKey={5}>
                    {translate('groupe')}
                </NavItem>
                <NavItem eventKey={6}>
                    {translate('groupf')}
                </NavItem>
                <NavItem eventKey={7}>
                    {translate('groupg')}
                </NavItem>
                <NavItem eventKey={8}>
                    {translate('grouph')}
                </NavItem>
                <NavItem eventKey={9}>
                    {translate('ro16')}
                </NavItem>
                <NavItem eventKey={10}>
                    {translate('quarterfinals')}
                </NavItem>
                <NavItem eventKey={11}>
                    {translate('semifinals')}
                </NavItem>
                <NavItem eventKey={12}>
                    {translate('finals')}
                </NavItem>
            </Nav>
            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    dispatch(add())
                }}>
                    <button type="submit">
                        Add
                    </button>
                    <CounterLabel />
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});

Bets = connect(mapStateToProps)(Bets)

export default Bets