import Link from '../components/Link';

export default function HomePage () {
  return (
    <>
      <header>
        <h1>React Router Clone</h1>
      </header>

      <main>
        <p>A React library that enables <strong>client side routing</strong></p>

        <Link to="/about">Go to about page</Link>
      </main>
    </>
  );
}
