import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { fetchBeers } from "../api/beer";
import { appReducer } from "../reducers/appReducer";
import { beerReducer } from "../reducers/beerReducer";

export function configureStore() {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


    const rootReducer = combineReducers({
        app: appReducer,
        beer: beerReducer
    })

    // const epic1 = () => of({type: "SET_NAME", payload: "Earl"})
    const rootEpic = combineEpics(fetchBeers)

    const epicMiddleware = createEpicMiddleware();
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)))
    epicMiddleware.run(rootEpic);
    return store;
}