'use strict';

let LinkedList = require('../DataStructures/LinkedList/LinkedList');

const amazingRace = new LinkedList();
amazingRace.add("Colombo, Sri Lanka")
    .add("Lagos, Nigeria")
    .add("Surat, India")
    .add("Suzhou, China");

console.log(amazingRace.contains('Seattle, Washington')); //> false
console.log(amazingRace.contains('Surat, India')); //> true
console.log(amazingRace.contains('Lagos, Nigeria')); //> true

amazingRace.remove('Surat, India');
console.log(amazingRace.contains('Seattle, Washington')); //> false
console.log(amazingRace.contains('Surat, India')); //> false
console.log(amazingRace.contains('Lagos, Nigeria')); //> true
