import {
    configuration
} from '../Configuration';

import {
    push
} from 'react-router-redux'

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

export function resetPasswordOnServer(name) {
    return {
        type: "RESETPASSWORDONSERVER",
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