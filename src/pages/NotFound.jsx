import Link from '../components/Link';

export default function NotFoundPage () {
  return (
    <>
      <header>
        <h1>404</h1>
      </header>

      <main>
        <p>There&apos;s nothing here</p>

        <Link to="/">Go to home page</Link>
      </main>
    </>
  );
}
