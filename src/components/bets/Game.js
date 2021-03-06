import React from 'react';
import { connect } from 'react-redux';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import { setScore } from '../../actions/BetActions';
import BetStatistics from './BetStatistics';
import BetSaveButton from './BetSaveButton';

import {
    Label,
    Grid,
    Col,
    Row,
    Image,
    Form,
    FormControl
} from 'react-bootstrap';

let Game = ({ user, currentRound, game, dispatch, translate, currentLanguage }) => (


    <div className="game">
        {
            (game.phaseName === "finals" || game.phaseName === "gameforthird")
                ?
                <h3 className="game-name">
                    {translate(game.phaseName)}
                </h3>
                :
                null
        }
        <div className="border-gold">
            <Grid>
                <Row>
                    {
                        (game.started && user.loggedIn)
                        //(true) // for demo purposes
                            ?
                            <BetStatistics game={game} translate={translate} />
                            :
                            null
                    }
                    {
                        (user.loggedIn)
                            ?
                            <BetSaveButton game={game} />
                            :
                            null
                    }
                </Row>
                <Row>
                    <Col xs={4} className="" style={{ textAlign: "right", marginLeft: "3%" }}>
                        <span className="country">
                            {translate(game.homeTeamName)}
                        </span>
                        <Image src={require('../../img/' + game.homeTeamName + '.png')} />
                    </Col>

                    <Col xs={2} className="" style={{ marginTop: "5%" }}>
                        {/* TODO use separate component with own state! */}
                        <Form inline>
                            <FormControl
                                value={(user.loggedIn) ? game.bet.bettedHomeTeamGoals : null}
                                disabled={!user.loggedIn || game.finished}
                                onChange={(event) => dispatch(setScore(event, currentRound, "home", game.game_id))}
                                type="number"
                                style={{ width: 60 }}
                            >
                            </FormControl>
                            <span className="score-colon">
                                :
                            </span>
                            <FormControl
                                value={(user.loggedIn) ? game.bet.bettedAwayTeamGoals : null}
                                disabled={!user.loggedIn || game.finished}
                                onChange={(event) => dispatch(setScore(event, currentRound, "away", game.game_id))}
                                type="number"
                                style={{ width: 60 }}
                            >
                            </FormControl>
                        </Form>
                    </Col>

                    <Col xs={4} className="" style={{ textAlign: "left" }}>
                        <Image src={require('../../img/' + game.awayTeamName + '.png')} />
                        <span className="country">
                            {translate(game.awayTeamName)}
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
                        {translate(game.locationName)}
                    </Label>
                    {
                        // only display results when game is finished
                        (game.finished === true)
                            //(true) // for demo purposes
                            ?
                            (
                                <div className="finished-labels">
                                    <Label>
                                        {translate('goalshome')}: {game.homeTeamGoals}
                                    </Label>
                                    <Label>
                                        {translate('goalsguest')}: {game.awayTeamGoals}
                                    </Label>
                                    {
                                        (user.loggedIn)
                                        //(true) // for demo
                                            ?
                                            <Label>
                                                {translate('score')}: {game.bet.score}
                                            </Label>
                                            :
                                            null
                                    }
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
    user: state.user,
    currentRound: state.round.currentRound,
    bets: state.bets,
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});

Game = connect(mapStateToProps)(Game)

export default Game;