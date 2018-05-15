// generic actions that are used everywhere

export function isLoading(bool) {
    return {
        type: "ISLOADING",
        isLoading: bool
    };
}

export function dismissError() {
    return {
        type: "DISMISSERROR",
    };
}

export function showError(message) {
    return {
        type: "SHOWERROR",
        message
    };
}