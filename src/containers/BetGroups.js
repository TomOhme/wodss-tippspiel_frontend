import React from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

import {
    DropdownButton,
    MenuItem,
    Button,
    Table,
    Glyphicon,
} from 'react-bootstrap';

let BetGroups = ({ betGroups, translate }) => (
    <div>
        <DropdownButton id={"groups"} title={translate('groups')}>
            {
                betGroups.groupNames.map((groupName) => {
                    // TODO eventkeys
                    return (
                        <MenuItem
                            key={groupName}
                            eventKey="1"
                            active={groupName === betGroups.currentGroup.name}>
                            {groupName}
                        </MenuItem>
                    )
                })
            }
        </DropdownButton>

        {
            // only display join button when user is not member
            (!betGroups.currentGroup.userIsMember) ? (
                <Button bsStyle="primary">
                    {translate('joingroup')}
                </Button>
            ) : null
        }

        <Button bsStyle="success">
            {translate('creategroup')}
        </Button>

        <br />

        <h3>{betGroups.currentGroup.name}</h3>

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
                {
                    betGroups.currentGroup.members.map((group) => {
                        return (
                            <tr key={group.number}>
                                <td>{group.number}</td>
                                <td>{group.name}</td>
                                <td>{group.points}</td>
                                <td><Button><Glyphicon glyph="user" /></Button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>

        {
            // only display leave button when user is member
            (betGroups.currentGroup.userIsMember) ? (
                <Button bsStyle="danger">
                    {translate('leavegroup')}
                </Button>
            ) : null
        }
    </div>
);

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    betGroups: state.betGroups
});

BetGroups = connect(mapStateToProps)(BetGroups)

export default BetGroups;