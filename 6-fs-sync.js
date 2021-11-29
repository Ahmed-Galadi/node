const { readFileSync, writeFileSync } = require('fs');

console.log("start")

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
    './content/result-text.txt',
    `this is the results:
        first text: ${first},
        second text: ${second}`,
    {
        flag: 'a'
    }
);

const result = readFileSync('./content/result-text.txt', 'utf8');

console.log(result);

console.log("end");
console.log("to the next task");