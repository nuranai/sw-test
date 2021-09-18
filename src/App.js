import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import MainPage from './components/MainPage';
import Favourites from './components/Favourites';
import './styles/styles.scss'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>
        <Route path="/favourites">
          <Favourites/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
