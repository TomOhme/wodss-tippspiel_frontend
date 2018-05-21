import {
    configuration
} from '../Configuration';

import {
    isLoading,
    showError
} from './'


export function getPlayerRankingFromServer() {
    var serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "betgroups";

    return (dispatch, getState) => {
        var request = new Request(url, {
            method: "GET",
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
                    throw new Error("Get playerranking failed");
                }
            })
            .then((playerRanking) => {
                dispatch(getPlayerRankingSuccess(playerRanking));
            })
            .catch((error) => {
                dispatch(showError(error.message));
            })
    }
}

export function getPlayerRankingSuccess(playerRanking) {
    return {
        type: "GETPLAYERRANKINGSUCCESS",
        playerRanking
    };
}