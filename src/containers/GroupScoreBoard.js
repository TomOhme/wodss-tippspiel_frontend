import React from 'react'
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { getGroupRankingFromServer } from '../actions/GroupRankingActions';

import {
    Form,
    Button,
    FormControl,
    Table,
    Grid,
    Row,
    Glyphicon
} from 'react-bootstrap';

let GroupScoreBoard = ({ getGroupRankingFromServer, betGroups, translate }) => (
    <div>
        <Grid>
            <Button className="button" onClick={() => getGroupRankingFromServer()}>
                <Glyphicon glyph="refresh" />
            </Button>
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