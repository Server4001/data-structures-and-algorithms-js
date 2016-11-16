'use strict';

let Stack = require('../DataStructures/Stack');

/**
 * baseConvert():
 * Base convert the given base 10 number to the given new base 1-10.
 *
 * @param {Number} n - The number whose base should be converted.
 * @param {Number} base - The new base to use. Must be 1-10.
 *
 * @returns {string}
 */
module.exports = function(n, base) {
    const baseParsed = parseInt(base);

    if (baseParsed < 1 || baseParsed > 10) {
        throw Error('New base must be an integer between 1 and 10.');
    }

    const s = new Stack();
    let converted = '';

    do {
        s.push(n % baseParsed);
        n = Math.floor(n /= baseParsed);
    } while (n > 0);

    while (s.length() > 0) {
        converted += s.pop();
    }

    return parseInt(converted);
};
