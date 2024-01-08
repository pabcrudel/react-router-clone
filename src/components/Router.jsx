import { useEffect, useState } from 'react';
import NotFoundPage from '../pages/NotFound';
import { NAVIGATION_EVENT } from '../constants';
import PropTypes from 'prop-types';
import { match } from 'path-to-regexp';

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

  /** Object that stores all the parameters of a given route.
   * @type MatchResult<object>
   */
  let routeParams = {};

  const Page = routes.find(
    ({ path }) => {
      if (path === currentPath) return true;

      /* Used `path-to-regexp` to detect dynamic routes:
      * - /search/:query <-- { query: react }
      *
      * `decodeURIComponent` is a native function that parses all the characters
      * that are related to an URI to characters that can be used in JS
      */
      const matchedUrl = match(path, { decode: decodeURIComponent });

      // If the decoded path matches current path, then it's params are stored
      const matched = matchedUrl(currentPath);
      if (matched) {
        routeParams = matched.params;
        return true;
      }

      // If there is any path that matches the current one, the navigation goes
      // to 404 page
      return false;
    }
  // Optional chaining to avoid errors if `.find()` returns undefined
  )?.Component;

  // Each page will have an object with the router params
  return (
    Page
      ? <Page routeParams={routeParams}/>
      : <NotFoundPage routeParams={routeParams}/>
  );
}

Router.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape(
    {
      path: PropTypes.string.isRequired,
      Component: PropTypes.func.isRequired
    }
  ))
};
