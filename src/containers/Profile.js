import React from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { changeMailOnServer, deleteProfileOnServer, resetPasswordOnServer } from '../actions';

import {
    Button,
    Panel,
    PanelGroup
} from 'react-bootstrap';

import ChangeMailForm from './ChangeMailForm';

let Profile = ({ user, translate, resetPasswordOnServer }) => (
    <div className="container-small">

        <PanelGroup accordion id="profilePanel">

            {/* Change email */}
            <Panel eventKey="1" bsStyle="custom">
                <Panel.Heading>
                    <Panel.Title toggle>
                        {translate("changemail")}
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    <ChangeMailForm translate={translate} changeMailOnServer={changeMailOnServer} />
                </Panel.Body>
            </Panel>

            {/* Reset Password */}
            <Panel eventKey="2" bsStyle="custom">
                <Panel.Heading>
                    <Panel.Title toggle>
                        {translate("resetpassword")}
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    <Button 
                        onClick={() => resetPasswordOnServer()}
                        bsStyle="blue">
                        {translate("resetpassword")}
                    </Button>
                </Panel.Body>
            </Panel>

            {/* Delete profile */}
            <Panel eventKey="3" bsStyle="custom">
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
        changeMailOnServer: (mail) => dispatch(changeMailOnServer()),
        resetPasswordOnServer: () => dispatch(resetPasswordOnServer())
    }
}

Profile = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default Profile;