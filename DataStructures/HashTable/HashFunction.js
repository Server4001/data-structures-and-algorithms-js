'use strict';

const hash = function(value, table) {
    const valueString = value.toString();
    const H = 37;
    let total = 0;

    for (let i = 0; i < valueString.length; i++) {
        total += H * total + valueString.charCodeAt(i);
    }

    total %= table.length;

    return parseInt(total);
};

module.exports = hash;
