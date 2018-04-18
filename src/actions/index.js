export function setGroup(group) {
    return {
        type: "SETCURRENTGROUP",
        group: group
    }
};

export function setScore(event, team, id) {
    console.log(event);
    console.log(team);
    console.log(id);
    return {
        type: "SETSCORE",
        team: team,
        id: id,
        event: event
    }
};