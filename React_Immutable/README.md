# React_Immutable

Practicing immutability in JavaScript with the
[Immutable.js](https://immutable-js.com/) library: converting plain
objects/arrays into immutable structures, reading nested values, list
operations, shallow/deep merging, equality checks, and lazy `Seq`.

## Tasks

- **0-fromjs.js** - `getImmutableObject(object)` converts a plain object
  into an immutable `Map` using `fromJS`.
- **1-map.js** - `getImmutableObject(object)` converts a plain object into
  an immutable `Map` using `Map`.
- **2-nested.js** - `accessImmutableObject(object, array)` reads the value
  at a given path (`array`) inside `object` via `fromJS(...).getIn(...)`.
- **3-list.js** - `getListObject(array)` builds an immutable `List`;
  `addElementToList(list, element)` appends `element` to `list`.
- **4-mutations.js** - `map`/`map2` demonstrate chained, non-mutating
  updates with `.set()`.
- **5-merge.js** - `concatElements(page1, page2)` concatenates two arrays
  into a `List`; `mergeElements(page1, page2)` merges two objects
  (`page2` wins on conflicts) and returns their values as a `List`.
- **6-deeply.js** - `mergeDeeplyElements(page1, page2)` recursively merges
  two nested objects with `mergeDeep`.
- **7-equality.js** - `areMapsEqual(map1, map2)` compares two Immutable
  `Map`s with `is`.
- **8-seq.js** - `printBestStudents(grades)` uses a lazy `Seq` to filter
  out students scoring below 70 and logs the rest with capitalized names.

## Setup

```
npm install
```

## Usage

Each file exports its function(s) for use elsewhere; there is no CLI
entry point.
