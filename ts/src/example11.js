"use strict";
function identity(arg) {
    return arg;
}
identity(10);
function useState(arg) {
    return [arg, function (arg2) { }];
}
var _a = useState(0), count = _a[0], setCount = _a[1];
var a = [1, 2, 3];
var b = [1, 2, 3, "a", "b"];
var myIdentity = identity;
