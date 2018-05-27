import {
    configuration
} from '../Configuration';

import {
    isLoading,
    showError,
    showMessage
} from './'

import {
    getTranslate
} from 'react-localize-redux';


export function switchGroup(group) {

    var serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "betgroups/" + group.id + "/users"

    return (dispatch, getState) => {

        var state = getState();

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
                } else if (response.status === 404) {
                    return []; // no users
                } else {
                    throw new Error("Get group failed");
                }
            })
            .then((users) => {
                group.users = users;
                dispatch(switchGroupSuccess(group, state.user.id));
            })
            .catch((error) => {
                dispatch(showError(error.message));
            })
    }
};

export function joinGroupOnServer(group, password, userId) {
    var serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "betgroupmemberships/" + group.id;

    if (password.length === 0) {
        //no password supplied, but fetch needs one for a correct request body
        password = " ";
    }

    return (dispatch, getState) => {
        var request = new Request(url, {
            method: "POST",
            Origin: serverUrl,
            credentials: "include",
            headers: new Headers({
                "X-Requested-With": "ok",
                "Origin": serverUrl,
                "Content-Type": "text/plain",
                "cookie": "BettingGame_SchranerOhmeZumbrunn_JSESSIONID=" + document.cookie
            }),
            body: password
        });

        fetch(request).then(response => {
                if (response.ok) {
                    return response.text;
                } else {
                    throw new Error("Join group failed");
                }
            })
            .then((users) => {
                group.users = users;
                dispatch(joinGroupSuccess(group));
            })
            .catch((error) => {
                dispatch(showError(error.message));
            })
    }
}

export function leaveGroupOnServer(group) {
    var serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "betgroupmemberships/" + group.id;

    return (dispatch, getState) => {
        var request = new Request(url, {
            method: "DELETE",
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
                    throw new Error("Leave group failed");
                }
            })
            .then((response) => {
                var translate = getTranslate(getState().locale);
                dispatch(showMessage(translate("leavegroupsuccess")));
                dispatch(getGroupRankingFromServer()); // reload groups
                dispatch(switchGroup(group));
            })
            .catch((error) => {
                dispatch(showError(error.message));
            })
    }
}

export function switchGroupSuccess(group, userId) {
    return {
        type: "SWITCHGROUPSUCCESS",
        group,
        userId
    }
}

export function joinGroupSuccess(group) {
    return (dispatch) => {
        dispatch(switchGroup(group));
    }
};

export function createGroupOnServer(name, password) {
    var serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "betgroups";

    return (dispatch, getState) => {

        dispatch(isLoading(true));

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
                //setTimeout(2000); // wait till server created group
                dispatch(getGroupRankingFromServer()); // reload groups
                dispatch(switchGroup(response)); // switch to this group
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

export function getGroupRankingFromServer() {
    var serverUrl = configuration.getValue("serverUrl");
    var url = serverUrl + "betgroups";

    return (dispatch, getState) => {

        dispatch(isLoading(true));

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
                //dispatch(switchGroup(state.betGroups.groups[0]));
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

export function getGroupRankingSuccess(groupRanking) {
    return {
        type: "GETGROUPRANKINGSUCCESS",
        groupRanking
    };
}