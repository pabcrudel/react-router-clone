import PropTypes from 'prop-types';

export default function Route ({ path, Component }) {
  return null;
}

Route.propTypes = {
  path: PropTypes.string.isRequired,
  Component: PropTypes.elementType.isRequired
};
