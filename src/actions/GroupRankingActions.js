import {
    configuration
} from '../Configuration';

import {
    isLoading,
    showError
} from './'


export function getGroupRankingFromServer() {
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
                    throw new Error("Get groupranking failed");
                }
            })
            .then((groupRanking) => {
                dispatch(getGroupRankingSuccess(groupRanking));
            })
            .catch((error) => {
                dispatch(showError(error.message));
            })
    }
}

export function getGroupRankingSuccess(groupRanking) {
    return {
        type: "GETGROUPRANKINGSUCCESS",
        groupRanking
    };
}