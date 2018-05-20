import React from 'react';
import { connect } from 'react-redux';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import { setScore } from '../actions/BetActions';

import {
    Label,
    Grid,
    Col,
    Row,
    Image,
    Form,
    FormControl
} from 'react-bootstrap';
import BetResultsDialog from '../containers/BetResultsDialog';
import BetSaveButton from '../containers/BetSaveButton';

let Game = ({ game, dispatch, translate, currentLanguage }) => (

    <div className="game">
        <div className="border-gold">
            <Grid>
                <Row>
                    {
                        (game.finished)
                            ?
                            <BetResultsDialog translate={translate} />
                            :
                            null
                    }
                    <BetSaveButton game={game} />
                </Row>
                <Row>
                <Col md={4} className="align">
                    <span className="country">
                        {translate(game.home.name)}
                    </span>
                    <Image src={require('../img/' + game.home.name + '.png')} />
                </Col>

                <Col md={3} className="score align">
                    <Form inline>
                        <FormControl
                            value={game.home.bet}
                            disabled={game.finished}
                            onChange={(event) => dispatch(setScore(event, "home", game.id))}
                            type="number"
                            style={{ width: 60 }}
                        >
                        </FormControl>
                        <span>
                            :
                        </span>
                        <FormControl
                            value={game.guest.bet}
                            disabled={game.finished}
                            onChange={(event) => dispatch(setScore(event, "guest", game.id))}
                            type="number"
                            style={{ width: 60 }}
                        >
                        </FormControl>
                    </Form>
                </Col>

                <Col md={4} className="align">
                    <Image src={require('../img/' + game.guest.name + '.png')} />
                    <span className="country">
                        {translate(game.guest.name)}
                    </span>
                </Col>
                </Row>
                <Row>
            <Label className="pull-left">
                {game.date}
            </Label>
            <Label className="pull-left">
                {game.time}
            </Label>
            <Label className="pull-right fix-pull">
                {translate(game.place)}
            </Label>
            {
                // only display results when game is finished
                (game.finished === true) ?
                    (
                        <div className="finished-labels">
                            <Label>
                                {translate('winner')}: {translate(game.winner)}
                            </Label>
                            <Label>
                                {translate('goalshome')}: {game.homegoals}
                            </Label>
                            <Label>
                                {translate('goalsguest')}: {game.guestgoals}
                            </Label>
                            <Label>
                                {translate('goaldifference')}: {game.difference}
                            </Label>
                            <Label>
                                {translate('total')}: {game.total}
                            </Label>
                        </div>
                    )
                    : null
            }
                </Row>
            </Grid>
        </div>
    </div >
);

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});

Game = connect(mapStateToProps)(Game)

export default Game;