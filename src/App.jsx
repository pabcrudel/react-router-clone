import { useState } from 'react';
import Footer from './components/Footer';

export default function App () {
  const [currentPath] = useState(window.location.pathname);

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

function HomePage () {
  return (
    <>
      <header>
        <h1>React Router Clone</h1>
      </header>

      <main>
        <p>A React library that enables <strong>client side routing</strong></p>

        <a href="/about">Go to about page</a>
      </main>
    </>
  );
}

function AboutPage () {
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

        <a href="/">Go to home page</a>
      </main>
    </>
  );
}

function NotFoundPage () {
  return (
    <>
      <header>
        <h1>404</h1>
      </header>

      <main>
        <p>There&apos;s nothing here</p>
      </main>
    </>
  );
}
