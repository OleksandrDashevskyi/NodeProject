// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const name = require("./4-name");
const sayHi =require("./5-utils")
const data = require("./6-alternative-flavor");
require("./7-mind-grenade")
sayHi("Susana");
sayHi(name.john);
sayHi(name.peter);