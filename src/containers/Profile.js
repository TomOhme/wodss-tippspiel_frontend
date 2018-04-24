import React from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { changeMailOnServer, changePasswordOnServer, deleteProfileOnServer } from '../actions';

import {
    Button
} from 'react-bootstrap';

import ChangeMailDialog from './ChangeMailDialog';

let Profile = ({user, translate, dispatch, changeMailOnServer}) => (
    <div>

        {/* Change email */}
        <ChangeMailDialog translate={translate} changeMailOnServer={changeMailOnServer} />

        {/* Change Password */}

        {/* Delete profile */}

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