import React from 'react'
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
    Image
} from 'react-bootstrap';
import BetResultsDialog from '../containers/BetResultsDialog';

let Game = ({ props, translate, currentLanguage }) => (

    <div>
        <ListGroup>
            <ListGroupItem>
                <Panel>
                    <Panel.Heading>
                        <BetResultsDialog />
                        <Label>
                            {translate('notsaved')}
                        </Label>
                    </Panel.Heading>
                    <Panel.Body>
                        id: {props.id}
                        <Label>
                            {translate('sui')}
                        </Label>
                        <Image src={require('../img/sui.png')} />
                        <Image src={require('../img/de.png')} />
                        <Label>
                            {translate('de')}
                        </Label>
                    </Panel.Body>
                    <Panel.Footer>
                        <Label>
                            20.6.
                        </Label>
                        <Label>
                            21:00
                        </Label>
                        <Label>
                            {translate('moscow')}
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