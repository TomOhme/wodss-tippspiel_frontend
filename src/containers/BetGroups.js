import React from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { createGroupOnServer, getBetGroupsFromServer, joinGroup, leaveGroup, switchGroup } from '../actions/BetGroupActions';

import {
    DropdownButton,
    MenuItem,
    Button,
    Table,
    Glyphicon,
} from 'react-bootstrap';

import CreateGroupDialog from './CreateGroupDialog';

let BetGroups = ({ betGroups, translate, getBetGroupsFromServer, createGroupOnServer, joinGroup, leaveGroup, switchGroup }) => (
    <div>
        <DropdownButton id={'groups'} title={translate('groups')}>
            {
                betGroups.groups.map((group) => {
                    return (
                        <MenuItem
                            key={group.id}
                            onSelect={(e) => switchGroup(group.name)}
                            active={group.name === betGroups.currentGroup.name}>
                            {group.name}
                        </MenuItem>
                    )
                })
            }
        </DropdownButton>

        {
            // only display join button when user is not member
            (!betGroups.currentGroup.userIsMember) ? (
                <Button className="button" bsStyle="primary">
                    {translate('joingroup')}
                </Button>
            ) : null
        }

        <CreateGroupDialog translate={translate} createGroupOnServer={createGroupOnServer} />

        <Button onClick={() => getBetGroupsFromServer()}>
            <Glyphicon glyph="refresh" />
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
                <Button className="button" bsStyle="red" onClick={leaveGroup}>
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

const mapDispatchToProps = dispatch => {
    return {
        getBetGroupsFromServer: () => dispatch(getBetGroupsFromServer()),
        createGroupOnServer: (name) => dispatch(createGroupOnServer(name)),
        joinGroup: () => dispatch(joinGroup()),
        leaveGroup: () => dispatch(leaveGroup()),
        switchGroup: (newGroup) => dispatch(switchGroup(newGroup))
    }
}

BetGroups = connect(mapStateToProps, mapDispatchToProps)(BetGroups)

export default BetGroups;