import Link from '../components/Link';
import PropTypes from 'prop-types';

export default function SearchPage ({ routeParams }) {
  return (
    <>
      <header>
        <h1>Search</h1>
      </header>

      <main>
        <p>Your search is {routeParams.query}</p>

        <Link to="/">Go to home page</Link>
      </main>
    </>
  );
}

SearchPage.propTypes = {
  routeParams: PropTypes.object.isRequired
};
