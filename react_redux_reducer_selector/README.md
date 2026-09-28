# react_redux_reducer_selector

Reducers and selectors for the school dashboard's Redux store: a plain UI
reducer, the same reducer rewritten with Immutable.js, ES6 reducers for
courses and notifications, a Normalizr + Immutable version of both, and
selectors for the notification state.

## Tasks

- **task_0** - `reducers/uiReducer.js`: plain-object reducer handling
  `DISPLAY_NOTIFICATION_DRAWER`, `HIDE_NOTIFICATION_DRAWER`,
  `LOGIN_SUCCESS`, `LOGIN_FAILURE`, and `LOGOUT`, built with the spread
  operator (no mutation) and a `default` case.
- **task_1** - Rewrites `uiReducer` on top of an Immutable.js `Map`,
  using `.set(...)` instead of the spread operator; no `fromJS`/`toJS`
  inside the reducer itself.
- **task_2** - `actions/courseActionTypes.js` gains `FETCH_COURSE_SUCCESS`;
  `reducers/courseReducer.js` handles it (tagging every course
  `isSelected: false`) plus `SELECT_COURSE`/`UNSELECT_COURSE`, using a
  native ES6 `Map` internally for O(1) lookups by id.
- **task_3** - Same pattern for notifications:
  `actions/notificationActionTypes.js` gains
  `FETCH_NOTIFICATIONS_SUCCESS`; `reducers/notificationReducer.js` keeps
  `{ notifications, filter }` state and handles
  `FETCH_NOTIFICATIONS_SUCCESS`, `MARK_AS_READ`, `SET_TYPE_FILTER`.
- **task_4** - Introduces Normalizr: `schema/courses.js`
  (`coursesNormalizer`) and an extended `schema/notifications.js`
  (`notificationsNormalizer`). Both reducers switch their state to an
  Immutable `Map`, merge normalized entities on fetch, and use
  `setIn(...)` to flip a single item's `isSelected`/`isRead` flag.
- **task_5** - `selectors/notificationSelector.js`: `filterTypeSelected`,
  `getNotifications`, and `getUnreadNotifications` (notifications where
  `isRead` is falsy), all operating on the Immutable state from task_4.

## Usage

Each task is a self-contained `dashboard` React app.

```
cd task_X/dashboard
npm install
npm start   # run the app
npm test    # run the Jest/Enzyme test suite
```
