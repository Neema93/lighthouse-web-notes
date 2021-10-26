'use strict';

for (let j = 0; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
}

const args = require('minimist')(process.argv.slice(2));

console.log(args);
console.log(args.i);