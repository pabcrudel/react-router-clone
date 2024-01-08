import { useEffect, useState } from 'react';
import NotFoundPage from '../pages/NotFound';
import { NAVIGATION_EVENT } from '../constants';
import PropTypes from 'prop-types';

export default function Router ({ routes = [] }) {
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

  const Page = routes.find(({ path }) => path === currentPath)?.Component;

  return Page ? <Page/> : <NotFoundPage/>;
}

Router.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape(
    {
      path: PropTypes.string.isRequired,
      Component: PropTypes.func.isRequired
    }
  ))
};
