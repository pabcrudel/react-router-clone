# React Router Clone

Clone of [React Router](https://reactrouter.com/en/main), a React library that
enables `client side routing`, for educational purposes.

## The reason behind this project

This project comes from `Midudev's React Crash Curse` on YouTube:

- [Learn how to build React Router from scratch and publish the package
  (2:05:58)](https://www.youtube.com/watch?v=K2NcGYajvY4&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=7)
  - Title translated by me. The original is in spanish.

In this video he explains how works `React Router` to improve knowledge about
React.

## Technical Test Statement

- Create a way to build MPAs (Multiple Page Applications)
- Create a way to build SPAs (Single Page Applications)
- Enable navigation between pages using the back button
- Create a Link component for declarative navigation
- Create a Router component for more declarative routing
- Support default route (404)
- Support routes with parameters
- `<Route />` component for declarative routing
- Lazy loading of routes
- Implement
  [i18n](https://en.wikipedia.org/wiki/Internationalization_and_localization)
  with routes
- Testing
- Publish the package on NPM

## Midudev's Technical Test Tips

### Use of classless CSS Frameworks

As always, Midudev suggested to use classless CSS Frameworks in order to add
some base styles to improve the appearance of the page. In this project he
suggested the first one, but there are other 2 frameworks that are often been
used by him:

- [Simple.css](https://simplecss.org/)
- [Water.css](https://watercss.kognise.dev/)
- [Bolt.css](https://boltcss.com/)

## Personal Knowledge Base (PKB)

### Get current location using JS Vanilla

If you want to get the current path to use it somewhere using JS you could do so
using `window.location.pathname` like in the following example:

```js
console.log(window.location.pathname)

/* http://localhost:5173/about -> /about */
```
