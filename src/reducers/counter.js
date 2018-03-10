
const counter = (state = {i: 0}, action) => {
    switch (action.type) {
        case 'ADD':
            return state.i + 1;
        default:
            return state
    }
}

export default counter;
