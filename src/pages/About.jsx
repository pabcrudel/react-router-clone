import Link from '../components/Link';

export default function AboutPage () {
  return (
    <>
      <header>
        <h1>About this project</h1>
      </header>

      <main>
        <p>
          I&apos;m Pablo Cru and I&apos;m following Midudev&apos;s React Crash
          Curse in order to learn React, How React Router works and how to
          publish my own library
        </p>

        <Link to="/">Go to home page</Link>
      </main>
    </>
  );
}
