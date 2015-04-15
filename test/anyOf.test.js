'use strict';

/**
 * Module dependencies.
 */

let createTest = require('./helpers/createTest');
let fixture = require('./helpers/fixture')(__dirname);

/**
 * Tests.
 */

describe('anyOf', function() {
  createTest(fixture('anyOf-basic'));
});
