import React from 'react';
import { connect } from 'react-redux';
import { add } from '../actions';
import { counter } from '../reducers';
import CounterLabel from './CounterLabel';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';

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
                    {translate('groupday1')}
                    </NavItem>
                <NavItem eventKey={2}>
                    {translate('groupday2')}
                    </NavItem>
                <NavItem eventKey={3}>
                    {translate('groupday3')}
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