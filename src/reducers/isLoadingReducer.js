export function isLoadingReducer(state = false, action) {
    switch (action.type) {
        case "ISLOADING":
            return action.isLoading;
        default:
            return state;
    }
}