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

export function save(event, id) {
    return {
        type: "SAVE",
        event: event,
        id: id
    }
};