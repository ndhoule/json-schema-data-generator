'use strict';

/**
 * Module dependencies.
 */

let createTest = require('./helpers/createTest');
let fixture = require('./helpers/fixture')(__dirname);

/**
 * Tests.
 */

describe('$ref', function() {
  createTest(fixture('ref-basic'));
});
