'use strict';

/**
 * Module dependencies.
 */

let Chance = require('chance');

/**
 * Chance instance.
 */

let random = new Chance();

/**
 * Select a random value from an array.
 *
 * @param {Array} array
 * @return {*}
 */
let getRandomElement = function(array) {
  return array[random.integer({ min: 0, max: array.length - 1 })];
};

/**
 * Exports.
 */

module.exports = getRandomElement;
