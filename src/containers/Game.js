import React from 'react';
import { connect } from 'react-redux';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import { setScore } from '../actions';

import {
    Label,
    ListGroup,
    ListGroupItem,
    Panel,
    Grid,
    Row,
    Col,
    Image,
    Form,
    FormControl
} from 'react-bootstrap';
import BetResultsDialog from '../containers/BetResultsDialog';
import BetSaveButton from '../containers/BetSaveButton';

let Game = ({ id, bets, dispatch, translate, currentLanguage }) => (

    <div className="container.fluid">
        <ListGroup>
            <ListGroupItem>
                <Panel>
                    <Panel.Heading>
                        <BetResultsDialog />
                        <BetSaveButton id={id} />
                    </Panel.Heading>
                    <Panel.Body>
                        <Grid>
                            <Row>
                                <Col xs={5} className="text-right">
                                    <span className="country">
                                        {translate(bets[id].home.name)}
                                    </span>
                                    <Image src={require('../img/' + bets[id].home.name + '.png')} />
                                </Col>

                                <Col xs={2} style={{ width: 160}} verticalalign="true">
                                    <Form inline>
                                        <FormControl 
                                            value={bets[id].home.bet} 
                                            disabled={bets[id].finished}
                                            onChange={(event) => dispatch(setScore(event, "home", id))} 
                                            type="number" 
                                            style={{ width: 60 }} 
                                            inline="true">
                                        </FormControl>
                                        :
                                        <FormControl 
                                            value={bets[id].guest.bet} 
                                            disabled={bets[id].finished}
                                            onChange={(event) => dispatch(setScore(event, "guest", id))} 
                                            type="number" 
                                            style={{ width: 60 }} 
                                            inline="true">
                                        </FormControl>
                                    </Form>
                                </Col>

                                <Col xs={5} className="text-left">
                                    <Image src={require('../img/' + bets[id].guest.name + '.png')} />
                                    <span className="country">
                                        {translate(bets[id].guest.name)}
                                    </span>
                                </Col>
                            </Row>
                        </Grid>
                    </Panel.Body>
                    <Panel.Footer>
                        <Label>
                            {bets[id].date}
                        </Label>
                        <Label>
                            {bets[id].time}
                        </Label>
                        <Label className="pull-right">
                            {translate(bets[id].place)}
                        </Label>
                    </Panel.Footer>
                </Panel>
            </ListGroupItem>
            <ListGroupItem>
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
            </ListGroupItem>
        </ListGroup>
    </div>
);

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code,
    bets: state.bets,
});

Game = connect(mapStateToProps)(Game)

export default Game;