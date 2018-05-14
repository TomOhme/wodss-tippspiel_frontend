import React from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { save } from '../actions/BetActions';

import {
    Button,
} from 'react-bootstrap';

let BetSaveButton = ({ id, bets, dispatch, translate }) => (
    <Button
        className="pull-right"
        onClick={(event) => dispatch(save(event, id))}
        disabled={bets[id].saved}
        bsStyle={bets[id].saved ? 'green' : 'red'}>
        {translate(bets[id].saved ? 'saved' : 'notsaved')}
    </Button>
);

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    bets: state.bets,
});

BetSaveButton = connect(mapStateToProps)(BetSaveButton)

export default BetSaveButton;