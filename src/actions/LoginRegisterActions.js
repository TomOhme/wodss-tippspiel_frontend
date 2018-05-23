import {
    configuration
} from '../Configuration';

import {
    push
} from 'react-router-redux';

import {
    isLoading,
    showError,
    showMessage
} from './';

import {
    getPlayerRankingFromServer
} from './PlayerRankingActions';
import {
    getGroupRankingFromServer
} from './BetGroupActions';

export function requestLogin(mail, password) {

    var serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "login";

    return (dispatch, getState) => {

        dispatch(isLoading(true));

        const state = getState();

        const mail = state.user.tempmail;
        const password = state.user.temppassword;

        console.log(mail);
        console.log(password);

        var request = new Request(url, {
            method: 'POST',
            Origin: serverUrl,
            credentials: "include",
            headers: new Headers({
                "X-Requested-With": "ok",
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                "username": mail,
                "password": password
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
                dispatch(loginSuccess(userData))
                dispatch(push("/")) // change url to home

                // load rankings, bets etc
                // TODO bets
                dispatch(getPlayerRankingFromServer());
                dispatch(getGroupRankingFromServer());

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

export function startLogout() {
    var serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "logout";

    return (dispatch) => {

        dispatch(isLoading(true));

        var request = new Request(url, {
            method: "POST",
            Origin: serverUrl,
            credentials: "include",
            headers: new Headers({
                "X-Requested-With": "ok",
                "cookie": "BettingGame_SchranerOhmeZumbrunn_JSESSIONID=" + document.cookie,
                // TODO
            })
        });

        fetch(request).then(response => {
                if (response.ok) {
                    dispatch(showMessage("Logout success")); // TODO german with translate()
                    return response.json()
                } else {
                    throw new Error("Logout on server failed");
                }
            })
            .then((logoutData) => {
                dispatch(clientLogOut());
                // TODO fix change url (problem with persist)
                //dispatch(push("/")); // change url to home
                //window.location.reload();
            })
            .catch((error) => {
                dispatch(showError(error.message));
            })
            .finally(() => {
                // disable spinner regardless
                dispatch(isLoading(false));
            })
    }
}

export function clientLogOut() {
    return {
        type: "LOGOUT"
    }
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
    const username = state.username;
    const mail = state.mail;
    const password = state.password1;
    const reminders = state.reminders;
    const dailyresults = state.dailyresults;

    const serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "users";

    return (dispatch) => {

        dispatch(isLoading(true));

        var request = new Request(url, {
            method: 'POST',
            Origin: serverUrl,
            credentials: "include",
            headers: new Headers({
                "X-Requested-With": "ok",
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                "name": username,
                "email": mail,
                "password": password,
                "reminders": reminders,
                "dailyresults": dailyresults
            })
        });

        console.log(request);

        fetch(request).then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error("Register failed");
                }
            })
            .then((userData) => {
                dispatch(registerSuccess(mail, password));
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

export function registerSuccess(mail, password) {
    // wait for some seconds
    sleep(5000);

    return (dispatch) => {
        dispatch(requestLogin(mail, password));
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}