import React from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { save } from '../actions/BetActions';

import {
    Button,
} from 'react-bootstrap';

let BetSaveButton = ({ game, dispatch, translate }) => (
    <Button
        className="pull-right fix-pull"
        onClick={(event) => dispatch(save(event, game.id))}
        disabled={game.saved}
        bsStyle={game.saved ? 'green' : 'red'}>
        {translate(game.saved ? 'saved' : 'notsaved')}
    </Button>
);

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    bets: state.bets,
});

BetSaveButton = connect(mapStateToProps)(BetSaveButton)

export default BetSaveButton;