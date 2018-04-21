import React from 'react'
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

import {
    Form,
    Button,
    FormControl,
    Table,
    Grid,
    Row
} from 'react-bootstrap';

let GroupScoreBoard = ({ groupScores, translate }) => (
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
                        <th>{translate('group')}</th>
                        <th>{translate('averagepoints')}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        groupScores.map(score => {
                            return (
                                <tr key={score.number}>
                                    <td>{score.number}</td>
                                    <td>{score.name}</td>
                                    <td>{score.averagepoints}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>

        </Grid>
    </div>
);

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    groupScores: state.groupScores
});

GroupScoreBoard = connect(mapStateToProps)(GroupScoreBoard)

export default GroupScoreBoard;