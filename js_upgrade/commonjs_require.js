const module1 = require("./commonjs_module.js");
console.log(module1);
console.log(module1.colors);

const rachel = new module1.Person("레이첼", 20);
console.log(rachel);

const { sayName } = require("./commonjs_module.js");
const { sayName2, sayhi2 } = require("./commonjs_module2.js");
sayName("bruce");
sayName2("alfred");
sayhi2();
