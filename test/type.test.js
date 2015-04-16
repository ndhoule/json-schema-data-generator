'use strict';

/**
 * Module dependencies.
 */

let createTest = require('./helpers/createTest');
let fixture = require('./helpers/fixture')(__dirname);

/**
 * Tests.
 */

describe('type', function() {
  describe('string', function() {
    createTest(fixture('type-string-basic'));
  });

  describe('null', function() {
    createTest(fixture('type-null-basic'));
  });

  describe('number', function() {
    createTest(fixture('type-number-basic'));

    xit('should respect multipleOf');
    xit('should respect minimum (inclusive)');
    xit('should respect exclusiveMinimum');
    xit('should respect maximum (inclusive)');
    xit('should respect exclusiveMaximum');
  });

  describe('integer', function() {
    createTest(fixture('type-integer-basic'));

    xit('should respect multipleOf');
    xit('should respect minimum (inclusive)');
    xit('should respect exclusiveMinimum');
    xit('should respect maximum (inclusive)');
    xit('should respect exclusiveMaximum');
  });

  describe('boolean', function() {
    createTest(fixture('type-boolean-basic'));
  });

  describe('array', function() {
    createTest(fixture('type-array-basic'));

    // TODO: items is an object or array that dictates what types the contents
    // of the array can be
    xit('should support items');
    xit('should support minItems');
    xit('should support maxItems');
    xit('should support uniqueItems');
  });

  describe('multiple', function() {
    createTest(fixture('type-multiple'));
  });

  describe('invalid', function() {
    createTest(fixture('type-invalid-single'));

    // TODO: Add multiple types to this array to expose a bug.
    createTest(fixture('type-invalid-multiple'));
  });
});
