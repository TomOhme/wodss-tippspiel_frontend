import React from 'react'
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { getGroupRankingFromServer } from '../../actions/BetGroupActions';

import {
    Form,
    Button,
    FormControl,
    Table,
    Grid,
    Row,
    Col,
    Glyphicon
} from 'react-bootstrap';

let GroupScoreBoard = ({ getGroupRankingFromServer, betGroups, translate }) => (
    <div>
        <Grid>
            <Row>
                <Col xs={2} md={2} lg={2}>
                    <Button className="button" onClick={() => getGroupRankingFromServer()}>
                        <Glyphicon glyph="refresh" />
                    </Button>
                </Col>
                <Col smOffset={7} xsOffset={7} mdOffset={8} lgOffset={8}>
                    <Form minLength="16" inline>
                        <FormControl minLength="16" inline type="text" placeholder={translate('name')}></FormControl>
                        <Button inline type="submit">{translate('search')}</Button>
                    </Form>
                </Col>
            </Row>

            <br />

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>{translate('group')}</th>
                        <th>{translate('averagepoints')}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.values(betGroups.groups).map(group => {
                            return <tr key={group.id}>
                                <td>{group.rank}</td>
                                <td>{group.name}</td>
                                <td>{group.score}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>

        </Grid>
    </div>
);

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    betGroups: state.betGroups
});

const mapDispatchToProps = dispatch => {
    return {
        getGroupRankingFromServer: () => dispatch(getGroupRankingFromServer())
    }
}

GroupScoreBoard = connect(mapStateToProps, mapDispatchToProps)(GroupScoreBoard)

export default GroupScoreBoard;