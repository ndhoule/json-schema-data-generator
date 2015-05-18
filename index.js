'use strict';

/**
 * Module dependencies.
 */

let Chance = require('chance');
let ImplementationError = require('./lib/implementationError');
let RandExp = require('randexp');
let genericIterator = require('./lib/genericIterator');
let getRandomElement = require('./lib/getRandomElement');
let is = require('is');

/**
 * Chance instance.
 */

let random = new Chance();

let generateRandomString = function(schema) {
  let minLength = schema.minLength || 0;
  let maxLength = schema.maxLength || minLength + random.integer({ min: minLength, max: minLength + 20 });

  if (minLength > maxLength) {
    throw new Error('minLength must be less than or equal to maxLength');
  }

  if (schema.pattern) {
    // TODO: Handle minLength/maxLength
    let randexp = new RandExp(schema.pattern);
    return randexp.gen();
  }

  return random.word({ length: maxLength });
};

let generateRandomObject = function(schema) {
  let result = {};

  if (schema.properties) {
    for (let kv of genericIterator(schema.properties)) {
      result[kv[0]] = generate(kv[1]);
    }
  }

  return result;
};

let generateRandomValue = function(type, schema) {
  switch(type) {
    case 'array':
      return [];

    case 'boolean':
      return random.bool();

    case 'integer':
      return random.integer();

    case 'null':
      return null;

    case 'number':
      return random.floating();

    case 'object':
      return generateRandomObject(schema);

    case 'string':
      return generateRandomString(schema);

    default:
      throw new TypeError(`Unknown type ${type}`);
  }
};

/**
 * generate
 *
 * @param {Object} schema
 * @return {undefined}
 */
let generate = function(schema) {
  if (schema.anyOf) {
    if (!is.array(schema.anyOf)) {
      throw new TypeError('anyOf must be an array');
    }

    return generate(getRandomElement(schema.anyOf));
  }

  if (schema.enum) {
    if (!is.array(schema.enum)) {
      throw new TypeError('enum must be an array');
    }

    if (!schema.enum.length) {
      throw new Error('enum must contain at least one element.');
    }

    return getRandomElement(schema.enum);
  }

  if (schema.type) {
    let type = schema.type;
    return generateRandomValue(is.array(type) ? getRandomElement(type) : type, schema);
  }

  // Not yet implemented
  throw new ImplementationError();
};

/**
 * createGenerator
 *
 * @param {Object} schema
 * @return {Function}
 */
let createGenerator = function(schema) {
  return generate.bind(this, schema);
};

/**
 * Exports.
 */

module.exports = createGenerator;
