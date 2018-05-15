import { configuration } from '../Configuration';

import { push } from 'react-router-redux'

import { isLoading } from './'

export function requestLogin() {
    var serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "/login";

    return (dispatch, getState) => {

        dispatch(isLoading(true));

        const state = getState();

        var request = new Request(url, {
            method: 'POST',
            headers: new Headers({
                "X-Requested-With": "ok",
                "Origin": serverUrl,
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                "username": state.user.tempmail,
                "password": state.user.temppassword
            })
        });

        fetch(request).then(response => {
                if (!response.ok) {
                    dispatch(isLoading(false));
                    throw Error("server error");
                }
                return response.json()
            })
            .then((userData) => {
                dispatch(loginSuccess(userData))
                dispatch(isLoading(false));
                dispatch(push("/"))
            })
    }
};

export function loginSuccess(userData) {
    return {
        type: "LOGINSUCCESS",
        userData
    };
}

export function logOut() {
    return {
        type: "LOGOUT"
    };
}

export function onMailChange(event) {
    return {
        type: "ONMAILCHANGE",
        mail: event.target.value
    }
};

export function onPasswordChange(event) {
    return {
        type: "ONPASSWORDCHANGE",
        password: event.target.value
    }
};

export function switchToRegister() {
    return {
        type: "SWITCHTOREGISTER"
    }
};

export function requestRegister(state) {
    return {
        type: "REQUESTREGISTER",
        mail: state.mail,
        username: state.username,
        password: state.password1
    }
};