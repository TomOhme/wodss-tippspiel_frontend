export function isLoadingReducer(state = false, action) {
    switch (action.type) {
        case "ISLOADING":
            var newState = Object.assign({}, state);
            newState = action.isLoading;
            return newState;
        default:
            return state;
    }
}