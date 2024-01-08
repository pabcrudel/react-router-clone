import Footer from './components/Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Router from './components/Router';

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
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
