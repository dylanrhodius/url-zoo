var animals = require('./animals').ANIMALS;
var verbs = require('./verbs').VERBS;

console.log(verbs.verbs[Math.floor(Math.random()*verbs.verbs.length)]+animals.animals[Math.floor(Math.random()*animals.animals.length)])
