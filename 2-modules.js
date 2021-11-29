
const variables = require('./vars.js');
const utils = require('./utils.js');
const names = variables.names;
const sayHi = utils.sayHi;

require('./3-mind-grenade');

for(let name of names) {
    sayHi(name);
}
