export function fetchSuccessAction(x) {
    return {
        type: "FETCH_SUCCESS",
        payload: x
    }
}

export function fetchInitAction() {
    return {
        type: "FETCH_INIT",
        payload: Date.now()
    }
}

export function searchInitAction(text) {
    return {
        type: "SEARCH_INIT",
        payload: text
    }
}
export function fetchFailedAction(errMsg) {
    return {
        type: "FETCH_FAILED",
        payload: errMsg
    }
}