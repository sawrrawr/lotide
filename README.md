# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sawrrawr/lotide`

**Require it:**

`const _ = require('@sawrrawr/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `head`: returns the first entry in an array
* `tail`: returns the remaining entries in an array, from index 1 onwards
* `middle`: returns the middle value(s) in an array
* `assertArraysEqual`: comparing arrays using an assertion message
* `assertEqual`: comparing values using an assertion message
* `countLetters`: can count how many times a certain letter appears in a string, returns an object
* `eqArrays`: compares two arrays, returns true or false
* `eqObjects`: compares two objects, returns true or false
* `findKey`: returns the appropriate key using callback functions
* `findKeyByValue`: returns the appropriate key by searching for it using its value
* `flatten`: returns a singular array from an input array that contains nested arrays
* `letterPositions`: returns an array with index positions of where certain letters are located within a string
* `map`: performs a function on each element of an array
* `takeUntil`: returns the elements of an array starting at index 0 and stopping at a specified value
* `without`: filters through an array to remove specific elements