import { useSelector } from 'react-redux';
import Header from './components/Header'
import MainPage from './components/MainPage';
import Favourites from './components/Favourites';
import './styles/styles.scss'

function App() {

  const view = useSelector(state => state.view)

  return (
    <>
      <Header />
      {
        view === 'main'
          ? <MainPage />
          : <Favourites />
      }
    </>
  );
}

export default App;
