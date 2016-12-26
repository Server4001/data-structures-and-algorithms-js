'use strict';

console.log('------------LINKED-LIST------------');

let LinkedList = require('../DataStructures/LinkedList/LinkedList');
let DoublyLinkedList = require('../DataStructures/DoublyLinkedList/DoublyLinkedList');

const amazingRace = new LinkedList();
amazingRace.add("Colombo, Sri Lanka")
    .add("Lagos, Nigeria")
    .add("Surat, India")
    .add("Suzhou, China");

amazingRace.insertAfter('seattle, wa', 'Colombo, Sri Lankaaaa');

console.log(amazingRace.contains('Seattle, Washington')); //> false
console.log(amazingRace.contains('Surat, India')); //> true
console.log(amazingRace.contains('Lagos, Nigeria')); //> true

amazingRace.remove('Surat, India');
console.log(amazingRace.contains('Seattle, Washington')); //> false
console.log(amazingRace.contains('Surat, India')); //> false
console.log(amazingRace.contains('Lagos, Nigeria')); //> true

console.log(amazingRace.toString());

console.log('------------DOUBLY-LINKED-LIST------------');
const dll = new DoublyLinkedList();
dll.add("Colombo, Sri Lanka")
    .add("Lagos, Nigeria")
    .add("Surat, India")
    .add("Suzhou, China");

dll.insertAfter('seattle, wa', 'Colombo, Sri Lankaaaa');

console.log(dll.contains('Seattle, Washington')); //> false
console.log(dll.contains('Surat, India')); //> true
console.log(dll.contains('Lagos, Nigeria')); //> true

dll.remove('Surat, India');
console.log(dll.contains('Seattle, Washington')); //> false
console.log(dll.contains('Surat, India')); //> false
console.log(dll.contains('Lagos, Nigeria')); //> true

console.log(dll.toStringBackwards());
