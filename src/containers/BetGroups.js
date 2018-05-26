import React from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { createGroupOnServer, leaveGroup, switchGroup, getGroupRankingFromServer, joinGroupOnServer } from '../actions/BetGroupActions';

import {
    DropdownButton,
    MenuItem,
    Button,
    Table,
    Glyphicon,
} from 'react-bootstrap';

import CreateGroupDialog from './CreateGroupDialog';
import JoinGroupPasswordDialog from './JoinGroupPasswordDialog';

let BetGroups = ({ betGroups, user, translate, showJoinModal, hideJoinModal, createGroupOnServer, joinGroupOnServer, leaveGroup, switchGroup }) => (
    <div>
        <DropdownButton id={'groups'} title={translate('groups')}>
            {
                betGroups.groups.map((group) => {
                    return (
                        <MenuItem
                            key={group.id}
                            onSelect={(e) => switchGroup(group)}
                            active={group.name === betGroups.currentGroup.name}>
                            {group.name}
                        </MenuItem>
                    )
                })
            }
        </DropdownButton>

        {
            // only display join button when user is not member
            (!betGroups.currentGroup.userIsMember)
                ?
                <JoinGroupPasswordDialog userId={user} group={betGroups.currentGroup} joinGroupOnServer={joinGroupOnServer} translate={translate} />
                :
                null
        }

        <CreateGroupDialog translate={translate} createGroupOnServer={createGroupOnServer} />

        <Button onClick={() => { getGroupRankingFromServer() }}>
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
                    {/*<th>{translate('showbets')}</th>*/}
                </tr>
            </thead>
            <tbody>
                {
                    (betGroups.currentGroup.users !== undefined)
                        ?
                        betGroups.currentGroup.users.map(user => {
                            return <tr key={user.id}>
                                <td>{user.rank}</td>
                                <td>{user.name}</td>
                                <td>{user.score}</td>
                                {/*<td><Button><Glyphicon glyph="user" /></Button></td>*/}
                            </tr>
                        })
                        :
                        null
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
    betGroups: state.betGroups,
    user: state.user
});

const mapDispatchToProps = dispatch => {
    return {
        getGroupRankingFromServer: () => dispatch(getGroupRankingFromServer()),
        createGroupOnServer: (name) => dispatch(createGroupOnServer(name)),
        joinGroupOnServer: (group, password, userId) => dispatch(joinGroupOnServer(group, password, userId)),
        leaveGroup: () => dispatch(leaveGroup()),
        switchGroup: (newGroup) => dispatch(switchGroup(newGroup))
    }
}

BetGroups = connect(mapStateToProps, mapDispatchToProps)(BetGroups)

export default BetGroups;