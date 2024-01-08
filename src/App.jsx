import Footer from './components/Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Router from './components/Router';
import SearchPage from './pages/Search';
import Route from './components/Route';

export default function App () {
  return (
    <>
      <Router>
        <Route path='/' Component={HomePage}/>
        <Route path='/about' Component={AboutPage}/>
        <Route path='/search/:query' Component={SearchPage}/>
      </Router>

      <Footer repositoryName='react-router-clone'/>
    </>
  );
}
