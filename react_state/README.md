# react_state

Continuation of the school dashboard project: adding local state, controlled
forms, React Context, and a first React Hook on top of the components built
in `React_inline_styling`.

## Tasks

- **task_0** - Adds a `displayDrawer` local state to `App`, with
  `handleDisplayDrawer`/`handleHideDrawer` methods passed down to
  `Notifications` so the notifications panel can be shown/hidden by
  clicking "Your notifications" or the close button.
- **task_1** - Turns `Login` into a controlled component: a real `form`
  with an `input[type=submit]`, `email`/`password` state wired to the two
  inputs via `handleChangeEmail`/`handleChangePassword`, and an
  `enableSubmit` state flag that only turns `true` once both fields are
  non-empty.
- **task_2** - Introduces `AppContext` (default `user` object +
  `logOut` function). `App` now owns `user`/`logOut` in its state, exposes
  `logIn`/`logOut` methods, wraps the tree in `AppContext.Provider`, and
  `Header` (converted to a class to use `contextType`) shows a
  `#logoutSection` with a working logout link when `user.isLoggedIn` is
  true.
- **task_3** - `Footer` becomes a context consumer (via `useContext`) that
  shows a "Contact us" link only when logged in. `App` also owns
  `listNotifications` in state with a `markNotificationAsRead(id)` method;
  `Notifications` is refactored to a `PureComponent` (no more
  `shouldComponentUpdate`/`markAsRead`) and uses the real handler passed
  down from `App`.
- **task_4** - Uses the `useState` hook in `CourseListRow` to add a
  checkbox on each course row; checking it applies the new `rowChecked`
  style (`#e6e4e4` background).

## Usage

Each task is a self-contained `dashboard` React app.

```
cd task_X/dashboard
npm install
npm start   # run the app
npm test    # run the Jest/Enzyme test suite
```
