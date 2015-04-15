'use strict';

let join = require('path').join;
let readFileSync = require('fs').readFileSync;

/**
 * Create a function that loads a JSON fixture.
 *
 * @param {string} cwd The path to load fixtures relative to. Usually __dirname.
 * @param {string} [fixturesDir] Optionally, provide the directory to load from.
 * @return {Function({string} filename)}
 */
let fixture = function(cwd, fixturesDir) {
  fixturesDir = fixturesDir || 'fixtures';

  return function(filename) {
    let contents;
    let filepath = join(cwd, fixturesDir, filename + '.json');

    try {
      contents = readFileSync(filepath).toString('utf-8');
    } catch (e) {
      throw new Error(`Could not read fixture file located at ${filepath}`);
    }

    return JSON.parse(contents);
  };
};

/**
 * Exports.
 */

module.exports = fixture;
