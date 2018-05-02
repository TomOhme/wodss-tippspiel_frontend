import React from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { changeMailOnServer, changePasswordOnServer, deleteProfileOnServer } from '../actions';

import {
    Button,
    Panel,
    PanelGroup
} from 'react-bootstrap';

import ChangeMailDialog from './ChangeMailDialog';

let Profile = ({ user, translate, dispatch, changeMailOnServer }) => (
    <div>

        <PanelGroup accordion id="profilePanel">

            {/* Change email */}
            <Panel eventKey="1">
                <Panel.Heading>
                    <Panel.Title toggle>
                        {translate("changemail")}
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                <ChangeMailDialog translate={translate} changeMailOnServer={changeMailOnServer} />
                </Panel.Body>
            </Panel>

            {/* Reset Password */}
            <Panel eventKey="2">
                <Panel.Heading>
                    <Panel.Title toggle>
                        {translate("resetpassword")}
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                </Panel.Body>
            </Panel>

            {/* Delete profile */}
            <Panel eventKey="3">
                <Panel.Heading>
                    <Panel.Title toggle>
                        {translate("deleteprofile")}
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                </Panel.Body>
            </Panel>

        </PanelGroup>

    </div>
);

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    user: state.user,
});

const mapDispatchToProps = dispatch => {
    return {
        changeMailOnServer: (mail) => dispatch(changeMailOnServer())
    }
}

Profile = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default Profile;