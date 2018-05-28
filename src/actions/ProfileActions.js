import {
    configuration
} from '../Configuration';

import {
    isLoading,
    showError,
    showMessage
} from './';

import {
    clientLogOut
} from './LoginRegisterActions';

import {
    getTranslate
} from 'react-localize-redux';


export function updateProfileOnServer(newProfile) {
    var serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "users/" + newProfile.userId;

    return (dispatch, getState) => {

        dispatch(isLoading(true));

        var request = new Request(url, {
            method: 'PUT',
            Origin: serverUrl,
            credentials: "include",
            headers: new Headers({
                "X-Requested-With": "ok",
                "Content-Type": "application/json",
                "cookie": "BettingGame_SchranerOhmeZumbrunn_JSESSIONID=" + document.cookie
            }),
            body: JSON.stringify({
                "name": newProfile.newusername,
                "email": newProfile.newmail,
                "password": newProfile.password,
                "newPassword": newProfile.newpassword,
                "reminders": newProfile.reminders,
                "dailyResults": newProfile.dailyResults
            })
        });

        fetch(request).then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error("Profile update failed");
                }
            })
            .then((newProfile) => {
                dispatch(updateProfileSuccess(newProfile));
            })
            .catch((error) => {
                dispatch(showError(error.message));
            })
            .finally(() => {
                // disable spinner regardless
                dispatch(isLoading(false));
            })
    }
};

export function updateProfileSuccess(newProfile) {
    return {
        type: "UPDATEPROFILESUCCESS",
        newProfile
    }
}

export function changeMailOnServerSuccess(mail) {
    return {
        type: "CHANGEMAILONSERVERSUCCESS",
        newMail: mail
    }
}

export function deleteProfileOnServerSuccess() {
    return {
        type: "DELETEPROFILEONSERVERSUCCESS",
    }
};

export function deleteProfileOnServer() {
    var serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "users/";

    return (dispatch, getState) => {

        dispatch(isLoading(true));

        const state = getState();

        url += state.user.id;

        var request = new Request(url, {
            method: 'DELETE',
            Origin: serverUrl,
            credentials: "include",
            headers: new Headers({
                "X-Requested-With": "ok",
                "cookie": "BettingGame_SchranerOhmeZumbrunn_JSESSIONID=" + document.cookie
            })
        });

        fetch(request).then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error("Delete profile failed");
                }
            })
            .then((newProfile) => {
                dispatch(deleteProfileOnServerSuccess());
                dispatch(clientLogOut());
                var translate = getTranslate(getState().locale);
                dispatch(showMessage(translate("deleteprofilesuccess")));
            })
            .catch((error) => {
                dispatch(showError(error.message));
            })
            .finally(() => {
                // disable spinner regardless
                dispatch(isLoading(false));
            })
    }
};