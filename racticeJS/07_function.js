func1(1, 2);
function func1(arg1, arg2){
    //code
    console.log("func1");
    return null;
}

const func2 = function(a, b) {
    return a>b ? a: b;
}
console.log(func2(2, 1));

const func3 = (a, b) => {
    return a>b ? a: b;
}
console.log(func3(3, 2));

const func4 = (a, b) => (a>b ? a: b)
console.log(func4(4, 3));
/**
> node .\07_function.js
func1
2
3
4
 */