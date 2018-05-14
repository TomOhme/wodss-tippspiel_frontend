import React from 'react';
import { connect } from 'react-redux';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import { setScore } from '../actions/BetActions';

import {
    Label,
    Grid,
    Col,
    Image,
    Form,
    FormControl
} from 'react-bootstrap';
import BetResultsDialog from '../containers/BetResultsDialog';
import BetSaveButton from '../containers/BetSaveButton';

let Game = ({ id, bets, dispatch, translate, currentLanguage }) => (

    <div className="container.fluid game">
        <div className="border-gold">
            <BetResultsDialog translate={translate} />
            <BetSaveButton id={id} />
            <Grid>
                <Col md={4} className="align">
                    <span className="country">
                        {translate(bets[id].home.name)}
                    </span>
                    <Image src={require('../img/' + bets[id].home.name + '.png')} />
                </Col>

                <Col md={3} className="score align">
                    <Form inline>
                        <FormControl
                            value={bets[id].home.bet}
                            disabled={bets[id].finished}
                            onChange={(event) => dispatch(setScore(event, "home", id))}
                            type="number"
                            style={{ width: 60 }}
                        >
                        </FormControl>
                        <span>
                            :
                        </span>
                        <FormControl
                            value={bets[id].guest.bet}
                            disabled={bets[id].finished}
                            onChange={(event) => dispatch(setScore(event, "guest", id))}
                            type="number"
                            style={{ width: 60 }}
                        >
                        </FormControl>
                    </Form>
                </Col>

                <Col md={4} className="align">
                    <Image src={require('../img/' + bets[id].guest.name + '.png')} />
                    <span className="country">
                        {translate(bets[id].guest.name)}
                    </span>
                </Col>
            </Grid>
            <Label>
                {bets[id].date}
            </Label>
            <Label>
                {bets[id].time}
            </Label>
            <Label className="pull-right">
                {translate(bets[id].place)}
            </Label>
            {
                // only display results when game is finished
                (bets[id].finished === true) ?
                    (
                        <div className="finished-labels">
                            <Label>
                                {translate('winner')}: {translate(bets[id].winner)}
                            </Label>
                            <Label>
                                {translate('goalshome')}: {bets[id].homegoals}
                            </Label>
                            <Label>
                                {translate('goalsguest')}: {bets[id].guestgoals}
                            </Label>
                            <Label>
                                {translate('goaldifference')}: {bets[id].difference}
                            </Label>
                            <Label>
                                {translate('total')}: {bets[id].total}
                            </Label>
                        </div>
                    )
                    : null
            }
        </div>
    </div >
);

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code,
    bets: state.bets,
});

Game = connect(mapStateToProps)(Game)

export default Game;