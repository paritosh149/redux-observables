// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import BeerList from './components/BeerList'

function App({name}) {
  return (
    <div className="App">
      <header className="App-header">
        Hello, {name}!
        <BeerList />
      </header>
    </div>
  );
}

export default connect(state => state.app)(App);
