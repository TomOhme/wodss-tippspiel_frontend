export function fetchPlayerRankingFromServer() {
    const url = configuration.getValue('serverUrl') + '/users/ranking';
    return (dispatch) => {
        fetch(url).then(response => {
                return response.json()
            })
            .then((playerRanking) => {
                dispatch(playerRankingFetchSuccess(playerRanking));
            })
    }
}

export function playerRankingFetchSuccess(playerRanking) {
    return {
        type: "PLAYERRANKINGFETCHSUCCESS",
        playerRanking
    };
}