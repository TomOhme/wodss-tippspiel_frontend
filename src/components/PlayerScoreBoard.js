import React from 'react'
import { localize } from 'react-localize-redux';

import {
    Form,
    Button,
    FormControl,
    ControlLabel,
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
        <Pagination.Item active={number === active}>{number}</Pagination.Item>
    );
}

const PlayerScoreBoard = ({ translate }) => (
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
                    <tr>
                        <td>1</td>
                        <td>hase</td>
                        <td>666</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>maulwurf</td>
                        <td>555</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>zebra</td>
                        <td>444</td>
                    </tr>
                </tbody>
            </Table>

            <Row className="text-center">
                <Pagination>{items}</Pagination>
            </Row>
        </Grid>
    </div>
);

export default localize(PlayerScoreBoard, 'locale');