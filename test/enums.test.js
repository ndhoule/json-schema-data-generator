'use strict';

/**
 * Module dependencies.
 */

let createTest = require('./helpers/createTest');
let fixture = require('./helpers/fixture')(__dirname);

/**
 * Tests.
 */

describe('enums', function() {
  createTest(fixture('enum-basic'));

  // Empty enums aren't spec-compliant
  xit('should throw on empty enums');
});
