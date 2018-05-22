import {
    configuration
} from '../Configuration';

import {
    isLoading,
    showError
} from './'


export function switchGroupSuccess(newGroup) {
    return {
        type: "SWITCHGROUPSUCCESS",
        newGroup
    }
};

export function switchGroup(newGroup) {
    var serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "betgroups";

    return (dispatch, getState) => {

        dispatch(isLoading(true));

        const state = getState();

        var request = new Request(url, {
            method: 'POST',
            Origin: serverUrl,
            credentials: "include",
            headers: new Headers({
                "X-Requested-With": "ok",
                "Origin": serverUrl,
                "Content-Type": "application/json",
                "cookie": "BettingGame_SchranerOhmeZumbrunn_JSESSIONID=" + document.cookie
            }),
            body: JSON.stringify({
                "name": name,
                "password": password 
            })
        });

        fetch(request).then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error("Create betgroup failed");
                }
            })
            .then((response) => {
                dispatch(getBetGroupsFromServer()); // reload
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
    var serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "betgroups";

    return (dispatch, getState) => {

        dispatch(isLoading(true));

        const state = getState();

        var request = new Request(url, {
            method: 'POST',
            Origin: serverUrl,
            credentials: "include",
            headers: new Headers({
                "X-Requested-With": "ok",
                "Origin": serverUrl,
                "Content-Type": "application/json",
                "cookie": "BettingGame_SchranerOhmeZumbrunn_JSESSIONID=" + document.cookie
            }),
            body: JSON.stringify({
                "name": name,
                "password": password 
            })
        });

        fetch(request).then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error("Create betgroup failed");
                }
            })
            .then((response) => {
                dispatch(getBetGroupsFromServer()); // reload
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
};

export function getBetGroupsFromServer() {
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
                    throw new Error("Get betgroups failed");
                }
            })
            .then((betGroupsData) => {
                dispatch(getBetGroupsSuccess(betGroupsData));
                //window.location.reload();
            })
            .catch((error) => {
                dispatch(showError(error.message));
            })
    }
}

export function getBetGroupsSuccess(betGroupsData) {
    return {
        type: "GETBETGROUPSSUCCESS",
        betGroupsData: betGroupsData
    }
};