import Footer from './components/Footer';
import Router from './components/Router';
import Route from './components/Route';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const SearchPage = lazy(() => import('./pages/Search'));

export default function App () {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Route path='/' Component={HomePage}/>
          <Route path='/about' Component={AboutPage}/>
          <Route path='/search/:query' Component={SearchPage}/>
        </Router>
      </Suspense>

      <Footer repositoryName='react-router-clone'/>
    </>
  );
}
