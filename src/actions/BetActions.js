import {
    configuration
} from '../Configuration';

import {
    isLoading,
    showError,
    showMessage
} from './'


export function setRound(round) {
    return {
        type: "SETCURRENTROUND",
        round: round
    }
};

export function setScore(event, round, team, id) {
    return {
        type: "SETSCORE",
        round: round,
        team: team, // e.g. 'home' or 'away'
        id: id,
        event: event
    }
};

export function saveBetOnServer(event, round, game, betId) {

    // TODO check bet.betExistsOnServer for PUT/POST

    var serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "bet";

    return (dispatch, getState) => {
        dispatch(isLoading(true));
        const state = getState();

        var request;
        var method;

        if (betId === undefined) {
            // new bet
            method = "POST";
        } else {
            // update bet
            method = "PUT";
            url += "?id=";
            url += betId;
        }

        request = new Request(url, {
            method: method,
            Origin: serverUrl,
            credentials: "include",
            headers: new Headers({
                "X-Requested-With": "ok",
                "cookie": "BettingGame_SchranerOhmeZumbrunn_JSESSIONID=" + document.cookie,
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                "id": game.id,
                "home": game.home,
                "guest": game.guest
            })
        });

        fetch(request).then(response => {
                if (response.ok) {
                    dispatch(showMessage("Bet update success")); // TODO german with translate()
                    return response.json()
                } else {
                    throw new Error("Bet update on server failed");
                }
            })
            .then((userData) => {
                dispatch(saveSuccess(round, game.id));
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

export function saveSuccess(round, id) {
    return {
        type: "SAVESUCCESS",
        round: round,
        id: id
    }
}

export function getUserbets() {
    var serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "userbets";

    return (dispatch, getState) => {
        dispatch(isLoading(true));
        const state = getState();

        var request = new Request(url, {
            method: "GET",
            Origin: serverUrl,
            credentials: "include",
            headers: new Headers({
                "X-Requested-With": "ok",
                "cookie": "BettingGame_SchranerOhmeZumbrunn_JSESSIONID=" + document.cookie
            }),
        });

        fetch(request).then(response => {
                if (response.ok) {
                    return response.json();
                } else if (response.status === 404) {
                    return response.json();
                } else {
                    throw new Error("Bet fetch on server failed");
                }
            })
            .then((userbets) => {
                dispatch(getUserbetsSuccess(userbets));
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

export function getUserbetsSuccess(userbets) {
    return {
        type: "GETUSERBETSSUCCESS",
        userbets
    }
}


export function getGames() {
    var serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "games";

    return (dispatch, getState) => {
        dispatch(isLoading(true));
        const state = getState();

        var request = new Request(url, {
            method: "GET",
            Origin: serverUrl,
            credentials: "include",
            headers: new Headers({
                "X-Requested-With": "ok",
                "cookie": "BettingGame_SchranerOhmeZumbrunn_JSESSIONID=" + document.cookie
            }),
        });

        fetch(request).then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Games fetch on server failed");
                }
            })
            .then((games) => {
                dispatch(getGamesSuccess(games));
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

function getGamesSuccess(games) {
    return {
        type: "GETGAMESSUCCESS",
        games
    }
}