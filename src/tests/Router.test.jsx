import { describe, it, expect, beforeEach, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { getCurrentLocation } from '../utils/getCurrentLocation';
import Router from '../components/Router';
import Route from '../components/Route';
import Link from '../components/Link';

// Create a mock to specify what should render a function to perform a test.
// Then, it will be used like this:
// - `getCurrentLocation.mockReturnValue('/about);`
// So I could test if the current path is `/about`, the router is rendering
// the about page.

vi.mock('../utils/getCurrentLocation.js', () => ({
  getCurrentLocation: vi.fn()
}));

describe('Router', () => {
  beforeEach(() => {
    // Clean rendered components
    cleanup();

    vi.clearAllMocks();
  });

  it('should render without problems', () => {
    render(<Router routes={[]}/>);
  });

  it('should render NotFoundPage (404) if any route matches', () => {
    render(<Router routes={[]}/>);
    expect(screen.getByText('404')).toBeTruthy();
  });

  it('should render the component of the first route that matches', () => {
    const routes = [
      { path: '/', textToRender: 'Home' },
      { path: '/about', textToRender: 'About' }
    ];

    const router = (
      <Router>
        {
          routes.map(({ path, textToRender }, index) => (
            <Route
              key={index}
              path={path}
              Component={() => <h1>{textToRender}</h1>}
            />
          ))
        }
      </Router>
    );

    for (const { path, textToRender } of routes) {
      testRouterWithSpecificPath(router, path, textToRender);
    }
  });

  it('should navigate using Links', () => {
    getCurrentLocation.mockReturnValueOnce('/');

    const aboutText = 'I&apos;m Pablo';

    render(
      <Router>
        <Route path='/' Component={() => (
            <>
              <h1>Home</h1>
              <Link to='/about'>About</Link>
            </>
        )} />
        <Route path='/about' Component={() => <h1>{aboutText}</h1>}/>
      </Router>
    );

    // Click on the link that has as text "About"
    const anchor = screen.getByText('About');
    fireEvent.click(anchor);

    /* Check that the about component is rendered by checking if the word
     * "About" is printed.
    */
    expect(screen.getByText(aboutText)).toBeTruthy();
  });
});

function testRouterWithSpecificPath (router, path, textToRender) {
  getCurrentLocation.mockReturnValue(path);
  render(router);
  expect(screen.getByText(textToRender)).toBeTruthy();
  cleanup();
}
