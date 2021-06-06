const initialState = {
    beers: [],
    status: "idle"
}

export function beerReducer(state = initialState, action) {
    switch(action.type) {
        case "FETCH_SUCCESS": return {
            ...state,
            beers: action.payload,
            status: "success",
            message: ""
        }
        case "SET_STATUS": return {
            ...state,
            status: action.payload
        }
        case "FETCH_FAILED": return {
            ...state,
            status: "failure",
            message: action.payload
        }
        default: return state;
    }
}