import React from 'react'
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { getPlayerRankingFromServer } from '../actions/PlayerRankingActions';
import _ from 'underscore';

import {
    Form,
    Button,
    FormControl,
    Table,
    Pagination,
    Grid,
    Row,
    Glyphicon
} from 'react-bootstrap';

/* TODO make dynamic */
let active = 1;
let items = [];
for (let number = 1; number <= 10; number++) {
    items.push(
        <Pagination.Item active={number === active} key={number}>{number}</Pagination.Item>
    );
}

let PlayerScoreBoard = ({ playerScores, translate, getPlayerRankingFromServer }) => (
    <div>
        <Grid>
            <Row className="">
                <Button className="button" onClick={() => getPlayerRankingFromServer()}>
                    <Glyphicon glyph="refresh" />
                </Button>

                <Form inline>
                    <FormControl type="text" placeholder={translate('name')}></FormControl>
                    <Button type="submit">{translate('search')}</Button>
                </Form>
            </Row>

            <br />

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>{translate('player')}</th>
                        <th>{translate('points')}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.values(playerScores).map(player => {
                            return <tr key={player.id}>
                                <td>{player.id}</td>
                                <td>{player.name}</td>
                                <td>{player.score}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>

            <Row className="text-center">
                <Pagination>{items}</Pagination>
            </Row>
        </Grid>
    </div>
);

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    playerScores: state.playerScores
});

const mapDispatchToProps = dispatch => {
    return {
        getPlayerRankingFromServer: () => dispatch(getPlayerRankingFromServer())
    }
}

PlayerScoreBoard = connect(mapStateToProps, mapDispatchToProps)(PlayerScoreBoard)

export default PlayerScoreBoard;