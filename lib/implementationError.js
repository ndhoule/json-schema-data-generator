'use strict';

/**
 * ImplementationError
 *
 * @constructor
 * @param {string} message
 * @return {ImplementationError}
 */
let ImplementationError = function(message) {
  Error.call(this);
  this.name = 'ImplementationError';
  this.message = message || 'Not yet implemented';
};

ImplementationError.prototype = Object.create(Error.prototype);

/**
 * Exports.
 */

module.exports = ImplementationError;
