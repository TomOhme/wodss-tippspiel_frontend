import {
    configuration
} from '../Configuration';

import {
    push
} from 'react-router-redux'

export function requestLogin() {
    var serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "/login";

    return (dispatch, getState) => {

        const state = getState();

        var request = new Request(url, {
            method: 'POST',
            headers: new Headers({
                //"Access-Control-Allow-Origin": "http://localhost:3000",
                //"Access-Control-Allow-Origin": serverUrl,
                //"mode": "cors",
                //"credentials": "include",
                "X-Requested-With": "ok",
                //"Host": "www.schraner.info",
                "Origin": serverUrl,
                //"Origin": "http://localhost:3000",
                "Content-Type": "application/json"
                //"Content-Type": "text/plain"
            }),
            body: JSON.stringify({
                "username": state.user.tempmail,
                "password": state.user.temppassword
            })
        });

        fetch(request).then(response => {
                if (!response.ok) {
                    throw Error("server error");
                }
                return response.json()
            })
            .then((userData) => {
                dispatch(loginSuccess(userData))
            })
            .then((response) =>
                dispatch(push("/"))
            );
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