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

### Access history to modify an URL without refreshing

Global object `window` has the object `history`. It allows you to modify the URL
without refreshing the page using `pushState`. This functions allows 3 params:

- `{} -> State`: Gives information to the new history entry. Some browser
  doesn't manage it well.

- `'' -> Title`: Setts the title of the new en history entry but some browsers
  ignore it.

- `href -> url`: Defines the URL as a string to the new history entry. Is
  important that this URL has the same origin for security purposes.

```js
function navigate (href) {
  window.history.pushState({}, '', href);
}
```

### Create and dispatch a custom event

In JS is possible to create a custom event using the `Event` object. It can be
created like an object in `Java` and needs a name given as a parameter.

```js
const event = new Event('myEvent');
```

To
[dispatch](https://www.wordreference.com/es/translation.asp?tranword=dispatch)
this event in order to perform an action, the global objet `window` has a
function called `dispatchEvent`.

```js
window.dispatchEvent(new Event('myEvent'));
```

For example, this could be used with the `navigate` function to create an event
listener that perform an action when the navigation happens.

```js
function navigate (href) {
  window.history.pushState({}, '', href);

  window.dispatchEvent(new Event('pushState'));
}
```
