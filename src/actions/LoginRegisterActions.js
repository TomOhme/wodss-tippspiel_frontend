import {
    configuration
} from '../Configuration';

import {
    push
} from 'react-router-redux'

import {
    isLoading,
    showError
} from './'

export function requestLogin() {
    var serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "login";

    return (dispatch, getState) => {

        dispatch(isLoading(true));

        const state = getState();

        var request = new Request(url, {
            method: 'POST',
            Origin: serverUrl,
            credentials: "include",
            headers: new Headers({
                "X-Requested-With": "ok",
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                "username": state.user.tempmail,
                "password": state.user.temppassword
            })
        });

        console.log(request);

        fetch(request).then(response => {
            console.log(response);
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error("Login failed");
                }
            })
            .then((userData) => {
                window.data = userData;
                dispatch(loginSuccess(userData))
                dispatch(push("/")) // change url to home
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