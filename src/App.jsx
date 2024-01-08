import Footer from './components/Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Router from './components/Router';
import SearchPage from './pages/Search';

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
];

export default function App () {
  return (
    <>
      <Router routes={routes}/>

      <Footer repositoryName='react-router-clone'/>
    </>
  );
}
