import React from 'react';
import { localize } from 'react-localize-redux';

import {
    DropdownButton,
    MenuItem,
    Button,
    Table,
    Glyphicon,
} from 'react-bootstrap';

const BetGroups = ({ translate }) => (
    <div>
        <DropdownButton title={translate('groups')}>
            <MenuItem eventKey="1" active>Team T</MenuItem>
            <MenuItem eventKey="2">Gruppe Kiosk</MenuItem>
        </DropdownButton>

        <Button bsStyle="primary">
            {translate('joingroup')}
        </Button>

        <Button bsStyle="success">
            {translate('creategroup')}
        </Button>

        <br />

        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>{translate('player')}</th>
                    <th>{translate('points')}</th>
                    <th>{translate('showbets')}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>hase</td>
                    <td>666</td>
                    <td><Button><Glyphicon glyph="user" /></Button></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>maulwurf</td>
                    <td>555</td>
                    <td><Button><Glyphicon glyph="user" /></Button></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>zebra</td>
                    <td>444</td>
                    <td><Button><Glyphicon glyph="user" /></Button></td>
                </tr>
            </tbody>
        </Table>

        <Button bsStyle="danger">
            {translate('leavegroup')}
        </Button>
    </div>
);

export default localize(BetGroups, 'locale');