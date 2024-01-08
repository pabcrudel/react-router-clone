import { useState } from 'react';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import NotFoundPage from './pages/NotFound';

export default function App () {
  const [currentPath] = useState(window.location.pathname);

  return (
    <>
      {
        currentPath === '/'
          ? <HomePage/>
          : currentPath === '/about'
            ? <AboutPage/>
            : <NotFoundPage/>
      }

      <Footer repositoryName='react-router-clone'/>
    </>
  );
}
