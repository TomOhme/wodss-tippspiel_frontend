import {
    configuration
} from '../Configuration';

import { getTranslate } from 'react-localize-redux';

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
    var url = serverUrl + "bets";

    return (dispatch, getState) => {
        dispatch(isLoading(true));
        const state = getState();

        var request;
        var method;

        if (game.bet.betExistsOnServer) {
            // new bet
            method = "PUT";
            url += "/";
            url += game.bet.id;
        } else {
            // update bet
            method = "POST";
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
                "game_id": game.game_id,
                "homeTeamGoals": game.bet.bettedHomeTeamGoals,
                "awayTeamGoals": game.bet.bettedAwayTeamGoals
            })
        });

        console.log(request);

        fetch(request).then(response => {
                if (response.ok) {
                    dispatch(showMessage("Bet update success")); // TODO german with translate()
                    return response.json()
                } else {
                    throw new Error("Bet update on server failed");
                }
            })
            .then((userData) => {
                dispatch(saveSuccess(round, game.game_id));
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
    console.log("testgetgames");
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

export function getBetStatistics(game) {
    var serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "games/bets/" + game.game_id;

    return (dispatch, getState) => {

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
                    throw new Error("Bet fetch on server failed");
                }
            })
            .then((betStatistics) => {
                var state = getState();
                var translate = getTranslate(state.locale);

                var home = translate(game.homeTeamName);
                var away = translate(game.awayTeamName);

                var labels = {
                    gamename: home + " : " + away,
                    home: "Sieg " + home,
                    draw: translate("draw"),
                    away: "Sieg " + away
                }
                dispatch(getBetStatisticsSuccess(betStatistics, game, labels));
            })
            .catch((error) => {
                dispatch(showError(error.message));
            })
    }
}

export function getBetStatisticsSuccess(betStatistics, game, labels) {
    return {
        type: "GETBETSTATISTICSSUCCESS",
        betStatistics,
        game,
        labels
    }
}
