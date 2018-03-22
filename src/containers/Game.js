import React from 'react';
import { connect } from 'react-redux';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';

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

let Game = ({ props, translate, currentLanguage }) => (

    <div className="container.fluid">
        <ListGroup>
            <ListGroupItem>
                <Panel>
                    <Panel.Heading>
                        <BetResultsDialog />
                        <Label className="pull-right">
                            {translate('notsaved')}
                        </Label>
                    </Panel.Heading>
                    <Panel.Body>
                        <Grid>
                            <Row>
                                <Col xs="5" className="text-right">
                                    <Label>
                                        {translate(props.home)}
                                    </Label>
                                    <Image src={require('../img/' + props.home + '.png')} />
                                </Col>

                                <Col xs="2" style={{ width: 160}} verticalAlign>
                                    <Form inline>
                                        <FormControl type="number" style={{ width: 60 }} inline>
                                        </FormControl>
                                        :
                                        <FormControl type="number" style={{ width: 60 }} inline>
                                        </FormControl>
                                    </Form>
                                </Col>

                                <Col xs="5" className="text-left">
                                    <Image src={require('../img/' + props.guest + '.png')} />
                                    <Label>
                                        {translate(props.guest)}
                                    </Label>
                                </Col>
                            </Row>
                        </Grid>
                    </Panel.Body>
                    <Panel.Footer>
                        <Label>
                            20.6.
                        </Label>
                        <Label>
                            21:00
                        </Label>
                        <Label className="pull-right">
                            {translate('jek')}
                        </Label>
                    </Panel.Footer>
                </Panel>
            </ListGroupItem>
            <ListGroupItem>
                <Label>
                    {translate('winner')}: winner
                </Label>
                <Label>
                    {translate('goalshome')}: home
                </Label>
                <Label>
                    {translate('goalsguest')}: guest
                </Label>
                <Label>
                    {translate('goaldifference')}: diff
                </Label>
                <Label>
                    {translate('total')}: total
                </Label>
            </ListGroupItem>
        </ListGroup>
    </div>
);

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});

Game = connect(mapStateToProps)(Game)

export default Game;