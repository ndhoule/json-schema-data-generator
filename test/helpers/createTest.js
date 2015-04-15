'use strict';

/**
 * Module dependencies.
 */

let assert = require('assert');
let is = require('is');
let times = require('lodash.times');
let createValidator = require('./createValidator');
let generator = require('../..');

/**
 * Assert a validation's test results are good and throw a descriptive error if
 * not.
 *
 * @param {Object} results
 */
let assertValid = function(results) {
  assert(results.isValid, `validation failed with error(s): ${JSON.stringify(results.errors, null, 2)}`);
};

/**
 * Create a test case.
 *
 * @param {Object} fixture
 */
let createTest = function(fixture) {
  let schema = fixture.schema;
  let throws = fixture.throws === undefined ? false : fixture.throws;
  let title = fixture.title;

  assert(is.string(title), `title must be a string but is a ${typeof title}`);
  assert(is.object(schema), `schema must be a plain object but is a ${typeof schema}`);
  assert(is.boolean(throws), `throws must be boolean a ${typeof schema}`);

  it(title, function() {
    let generate = generator(schema);

    times(process.env.TEST_RUNS || 1000, function() {
      if (throws) {
        assert.throws(generate);
      } else {
        let validate = createValidator(schema);
        let data = generate();
        assertValid(validate(data));
      }
    });
  });
};

/**
 * Exports.
 */

module.exports = createTest;
