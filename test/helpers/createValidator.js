'use strict';

/**
 * Module dependencies.
 */

//let draft04Schema = require('./draft-04-schema');
let validator = require('is-my-json-valid');

/**
 * Default validator options.
 */

const VALIDATOR_OPTIONS = {
  greedy: true,
  verbose: true
};

/**
 * Test if a schema is valid according to JSON Schema Draft 04.
 *
 * @api private
 * @param {Object} schema
 * @return {boolean}
 */
//let isValidDraft04Schema = validator(draft04Schema, VALIDATOR_OPTIONS);

/**
 * Create a validator that validates an object against a json schema.
 *
 * @api public
 * @param {Object} schema
 * @return {Function}
 */
let createValidator = function(schema) {
  let _validate = validator(schema, VALIDATOR_OPTIONS);

  return function(data) {
    let isValid = _validate(data);
    return {
      isValid: isValid,
      errors: _validate.errors
    };
  };
};

/**
 * Exports.
 */

module.exports = createValidator;
