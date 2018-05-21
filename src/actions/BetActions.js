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
        team: team, // e.g. 'home' or 'guest'
        id: id,
        event: event
    }
};

export function saveBetOnServer(event, round, game, betId) {
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
            headers: new Headers({
                "X-Requested-With": "ok",
                "Origin": serverUrl,
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
                //dispatch(push("/")) // change url to home
                //window.location.reload(); // reload page to display TODO necessary?
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

export function getBetsForUser() {
    var serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "user/bets";

    return (dispatch, getState) => {
        dispatch(isLoading(true));
        const state = getState();

        var request = new Request(url, {
            method: "GET",
            headers: new Headers({
                "X-Requested-With": "ok",
                "Origin": serverUrl
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
            .then((response) => {
                if (response === 404) {
                    return; // no bets available, do nothing
                }

                response.forEach(element => {
                    // TODO
                    // is this an array or object? includes .bets?
                });
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