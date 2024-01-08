import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import NotFoundPage from './pages/NotFound';
import { NAVIGATION_EVENT } from './constants';

export default function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    function changeLocation () {
      const pathName = window.location.pathname;

      setCurrentPath(prevState => {
        if (prevState !== pathName) return pathName;
      });
    }

    // Custom event that triggers when the navigation goes ahead
    window.addEventListener(NAVIGATION_EVENT, changeLocation);

    // Native event that triggers when the navigation goes backward
    window.addEventListener('popstate', changeLocation);

    // Clear event listener when this component is destroyed
    return () => {
      window.removeEventListener(NAVIGATION_EVENT, changeLocation);
      window.removeEventListener('popstate', changeLocation);
    };
  }, []);

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
