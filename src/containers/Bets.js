import React from 'react';
import { connect } from 'react-redux';
import { add } from '../actions';
import { counter } from '../reducers';
import CounterLabel from './CounterLabel';

import {
    Nav,
    NavItem,
    Button
} from 'react-bootstrap';

let Bets = ({ dispatch }) => {
    let input

    return (
        <div>
            <Nav bsStyle="tabs" activeKey={1} onSelect={this.handleSelect}>
                <NavItem eventKey={1}>
                    Gruppenphase Spieltag 1
                    </NavItem>
                <NavItem eventKey={2}>
                    Gruppenphase Spieltag 2
                    </NavItem>
                <NavItem eventKey={3}>
                    Gruppenphase Spieltag 3
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

Bets = connect()(Bets)

export default Bets