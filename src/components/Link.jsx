import { NAVIGATION_EVENT } from '../constants';
import PropTypes from 'prop-types';

export default function Link ({ target, to, ...props }) {
  return (
    <a
      onClick={event => navigationManager(event, target, to)}
      href={to}
      target={target}
      {...props}
    ></a>
  );
}

Link.propTypes = {
  target: PropTypes.string,
  to: PropTypes.string.isRequired
};

/** Event management is the same as React Router original library because it
 * is a common way to do so.
 * @see [Source: React Router](https://github.com/remix-run/react-router/blob/main/packages/react-router-dom/dom.ts)
*/
function navigationManager (event, target, to) {
  /** Button 0 is the primary click. Usually it is the left click */
  const isMainEvent = event.button === 0;

  /** If any keyboard key that modifies the event is clicked */
  const isModifiedEvent =
    event.metaKey ||
    event.altKey ||
    event.ctrlKey ||
    event.shiftKey;

  /** If new page must be opened in the same window */
  const isManageableEvent = !target || target === '_self';

  if (isMainEvent && isManageableEvent && !isModifiedEvent) {
    // Avoid page refreshing when the anchor is clicked
    event.preventDefault();

    // Perform navigation
    navigate(to);

    // Scroll to the top on each navigation
    window.scrollTo(0, 0);
  }
}

function navigate (href) {
  window.history.pushState({}, '', href);

  window.dispatchEvent(new Event(NAVIGATION_EVENT));
}
