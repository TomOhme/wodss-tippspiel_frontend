// generic actions that are used everywhere

export function isLoading(bool) {
    return {
        type: "ISLOADING",
        isLoading: bool
    };
}