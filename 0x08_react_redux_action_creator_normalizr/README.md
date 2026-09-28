# 0x08_react_redux_action_creator_normalizr

Normalizing nested API data with [Normalizr](https://github.com/paularmstrong/normalizr)
and building Redux action types/creators (including a bound and an async
thunk action creator) on top of the school dashboard.

## Provided files

- `notifications.json` - raw (denormalized) notification data, read by
  every task's `src/schema/notifications.js`.
- `login-success.json` - mock login API response, copied into
  `task_7/dashboard/dist/` to be served as a fake `/login-success.json`
  endpoint.

## Tasks

- **task_0** - `src/schema/notifications.js` reads `notifications.json`
  and exposes `getAllNotificationsByUser(userId)`, filtering the raw data
  by `author.id` and returning the matching `context` objects.
- **task_1** - Introduces Normalizr `schema.Entity` definitions for
  `users`, `messages` (keyed by `guid`), and `notifications`
  (`author`/`context`), and normalizes the full dataset with `normalize`.
- **task_2** - Rewrites `getAllNotificationsByUser` to read from the
  normalized `entities` (one `for...in` loop, no `Object.keys`) instead of
  the raw JSON.
- **task_3** - `actions/courseActionTypes.js` (`SELECT_COURSE`,
  `UNSELECT_COURSE`) and `actions/courseActionCreators.js`
  (`selectCourse`, `unSelectCourse`), with tests.
- **task_4** - `actions/uiActionTypes.js` (`LOGIN`, `LOGOUT`,
  `DISPLAY_NOTIFICATION_DRAWER`, `HIDE_NOTIFICATION_DRAWER`) and
  `actions/uiActionCreators.js` with matching action creators, with tests.
- **task_5** - `actions/notificationActionTypes.js` (`MARK_AS_READ`,
  `SET_TYPE_FILTER`, `NotificationTypeFilters`) and
  `actions/notificationActionCreators.js` (`markAsAread`,
  `setNotificationFilter`), with tests.
- **task_6** - Adds `src/store.js` (a minimal Redux store with
  `redux-thunk` middleware) and binds every action creator from task_3-5
  to it via `bindActionCreators`.
- **task_7** - Installs `redux`/`redux-thunk`; adds `LOGIN_SUCCESS`/
  `LOGIN_FAILURE` action types, `loginSuccess`/`loginFailure` action
  creators, and an async `loginRequest(email, password)` thunk that
  dispatches `login`, fetches `/login-success.json`, and dispatches
  `loginSuccess`/`loginFailure` depending on the result. Tested with
  `redux-mock-store` and `fetch-mock`.

## Usage

Each task is a self-contained `dashboard` React app.

```
cd task_X/dashboard
npm install
npm start   # run the app
npm test    # run the Jest/Enzyme test suite
```
