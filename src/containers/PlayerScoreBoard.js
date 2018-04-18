import React from 'react'
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

import {
    Form,
    Button,
    FormControl,
    Table,
    Pagination,
    Grid,
    Row
} from 'react-bootstrap';

/* TODO make dynamic */
let active = 1;
let items = [];
for (let number = 1; number <= 10; number++) {
    items.push(
        <Pagination.Item active={number === active} key={number}>{number}</Pagination.Item>
    );
}

let PlayerScoreBoard = ({ playerScores, translate }) => (
    <div>
        <Grid>
            <Row className="text-center">
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
                        playerScores.map(score => {
                            return (
                                <tr key={score.number}>
                                    <td>{score.number}</td>
                                    <td>{score.name}</td>
                                    <td>{score.points}</td>
                                </tr>
                            )
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

PlayerScoreBoard = connect(mapStateToProps)(PlayerScoreBoard)

export default PlayerScoreBoard;