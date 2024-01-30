"use strict";
function greet(name, greeting) {
    return "".concat(greeting || "Hello", ", ").concat(name);
}
function greet2(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(name);
}
console.log(greet("이름"));
console.log(greet("이름", "반가워"));
