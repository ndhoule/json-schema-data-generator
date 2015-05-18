'use strict';

/**
 * Creates a generic iterator for objects.
 */
let genericIterator = function*(obj) {
  let keys = Object.keys(obj);

  for (let key of keys) {
    yield [key, obj[key]];
  }
};

/**
 * Exports.
 */

module.exports = genericIterator;
