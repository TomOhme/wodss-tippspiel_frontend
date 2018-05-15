// generic actions that are used everywhere

export function loading(bool) {
    return {
        type: "LOADING",
        loading: bool
    };
}