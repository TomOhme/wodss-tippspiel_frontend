const initialState = {
    currentGroup: "A",
};

const betGroupReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SETCURRENTGROUP':
            state.currentGroup = action.group;
            return state;
        default:
            return state;
    }
};

export default betGroupReducer;