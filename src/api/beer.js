import { ofType } from "redux-observable";
import { concat, of } from "rxjs";
import { ajax } from "rxjs/ajax"
import { catchError, debounceTime, map, switchMap } from "rxjs/operators";
import { fetchSuccessAction, fetchFailedAction } from "../actions/beerActions";


const API = "https://api.punkapi.com/v2/beers";
const searchApi = text => `${API}?beer_name=${encodeURIComponent(text)}`;
export function fetchBeers(action$) {
    return action$.pipe(
        ofType("SEARCH_INIT"),
        debounceTime(1000),
        // filter(x=>x.payload.trim().length),
        switchMap(({ payload }) => concat(
                of({ type: "SET_STATUS", payload: "pending" }),
                ajax.getJSON(searchApi(payload)).pipe(
                    map(x => fetchSuccessAction(x)),
                    // delay(4000),
                    catchError(err => of(fetchFailedAction(err.response.message)))
                )
            )
        )
    )
}
