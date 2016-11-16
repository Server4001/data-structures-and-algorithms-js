'use strict';

let Stack = require('../DataStructures/Stack');

/**
 * palindrome():
 * Determine if the given word is a palindrome, removing spaces and special chars.
 * A palindrome is a string which is spelled the same forwards and backwards.
 *
 * @param {string} word - Determine if this word is a palindrome.
 *
 * @returns {boolean}
 */
module.exports = function(word) {
    const s = new Stack();
    const wordLower = word.toLowerCase().replace(/\W/gi, '');
    let reversed = '';

    for (let i = 0; i < wordLower.length; i++) {
        s.push(wordLower[i]);
    }

    while (s.length() > 0) {
        reversed += s.pop();
    }

    return (wordLower == reversed);
};
