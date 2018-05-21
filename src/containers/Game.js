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
        {
            (game.name !== undefined)
                ?
                <h3 className="game-name">
                    {translate(game.name)}
                </h3>
                :
                null
        }
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
                    <Col xs={4} className="" style={{textAlign: "right", marginLeft: "3%"}}>
                        <span className="country">
                            {translate(game.home.name)}
                        </span>
                        <Image src={require('../img/' + game.home.name + '.png')} />
                    </Col>

                    <Col xs={2} className="" style={{marginTop: "5%"}}>
                        <Form inline>
                            <FormControl
                                value={game.home.bet}
                                disabled={game.finished}
                                onChange={(event) => dispatch(setScore(event, "home", game.id))}
                                type="number"
                                style={{ width: 60 }}
                            >
                            </FormControl>
                            <span className="score-colon">
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

                    <Col xs={4} className="" style={{textAlign: "left"}}>
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