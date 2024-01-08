import { NAVIGATION_EVENT } from '../constants';
import PropTypes from 'prop-types';

export default function Link ({ target, to, ...props }) {
  const handleClick = event => {
    // Avoid page refreshing when the anchor is clicked
    event.preventDefault();

    // Perform navigation
    navigate(to);
  };

  return (
    <a onClick={handleClick} href={to} target={target} {...props}></a>
  );
}

Link.propTypes = {
  target: PropTypes.string,
  to: PropTypes.string.isRequired
};

function navigate (href) {
  window.history.pushState({}, '', href);

  window.dispatchEvent(new Event(NAVIGATION_EVENT));
}
