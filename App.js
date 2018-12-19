import React from 'react';

// import de ma navigation qui contient tous mes Screens
import Navigation from './Components/Navigation/Navigation';

// import de mes Reducers
import teamStats from './Components/Reducers/stats.reducer'
import match from './Components/Reducers/match.reducer'

// import de mes outils Redux
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

// Création de mon Store
const store = createStore(combineReducers({teamStats, match}));

export default class App extends React.Component {
  render() {
    return (<Provider store={store}>
      <Navigation/>
    </Provider>);
  }
}
