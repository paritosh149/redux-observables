import { connect } from "react-redux"
import { searchInitAction } from "../actions/beerActions";

export function BeerList({ beers,message, status, searchInitAction}) {
    return <div>
        {/* <button onClick={fetchInitAction} >Get Beers</button> */}
        <input onChange={evt => searchInitAction(evt.target.value)} />
        {status === "pending" && <div>Loading...</div>}
        {status === "failure" && <div>Error: {message}</div>}
        {status === "success" && <div>Found {beers.length} Beers!!!</div>}
    </div>
}

export default connect(state => state.beer, {searchInitAction})(BeerList);
