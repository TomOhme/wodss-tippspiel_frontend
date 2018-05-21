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

export function saveBetOnServer(event, round, id) {
    var serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "login";

    return (dispatch, getState) => {

        dispatch(isLoading(true));

        const state = getState();

        var request = new Request(url, {
            // TODO
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
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error("Login failed");
                }
            })
            .then((userData) => {
                dispatch(saveSuccess(round, id));
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