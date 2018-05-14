import {
    configuration
} from '../Configuration';

export function setRound(round) {
    return {
        type: "SETCURRENTROUND",
        round: round
    }
};

export function setScore(event, team, id) {
    return {
        type: "SETSCORE",
        team: team, // e.g. 'home' or 'guest'
        id: id,
        event: event
    }
};

export function save(event, id) {
    return {
        type: "SAVE",
        event: event,
        id: id
    }
};

export function switchGroup(newGroup) {
    return {
        type: "SWITCHGROUP",
        newGroup
    }
};

export function joinGroup(groupName) {
    return {
        type: "JOINGROUP",
        groupName: groupName
    }
};

export function leaveGroup(groupName) {
    return {
        type: "LEAVEGROUP",
        groupName: groupName
    }
};

export function createGroupOnServer(name, password) {
    return {
        type: "CREATEGROUPONSERVER",
        name: name,
        password: password
    }
};

export function changeMailOnServer(mail) {
    return {
        type: "CHANGEMAILONSERVER",
        mail: mail
    }
};

export function changePasswordOnServer(name) {
    return {
        type: "CHANGEPASSWORDONSERVER",
        name: name
    }
};

export function deleteProfileOnServer(name) {
    return {
        type: "DELETEPROFILEONSERVER",
        name: name
    }
};

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

export function requestLogin(username, password) {
    var serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "/login";

    return (dispatch) => {
        var request = new Request(url, {
            method: 'POST',
            headers: new Headers({
                //"Access-Control-Allow-Origin": "http://localhost:3000",
                //"Access-Control-Allow-Origin": serverUrl,
                //"mode": "cors",
                //"credentials": "include",
                //"Authorization": "",
                "X-Requested-With": "ok",
                //"Host": "www.schraner.info",
                "Origin": serverUrl,
                //"Origin": "http://localhost:3000",
                "Content-Type": "application/json"
                //"Content-Type": "text/plain"
            }),
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        });

        console.log(request);

        fetch(request).then(response => {
                if (!response.ok) {
                    throw Error("database error");
                }
                // Convert response to JSON
                return response.json()
            })
            .then((questionnaire) => {
                dispatch(loginSuccess(username));
                console.log("success");
            })

    }
};

export function loginSuccess(username) {
    return {
        type: "LOGINSUCCESS",
        username: username
    };
}

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