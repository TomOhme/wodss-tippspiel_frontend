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

export function deleteProfileOnServer() {
    return {
        type: "DELETEPROFILEONSERVER",
    }
};
