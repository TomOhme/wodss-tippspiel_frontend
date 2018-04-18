export function setGroup(group) {
    return {
        type: "SETCURRENTGROUP",
        group: group
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