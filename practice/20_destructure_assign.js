function func1({width, height, ...r}){
    console.log(width);
    console.log(height);
    console.log(r);
};

const obj1 = {
    width: 100,
    height: 200,
    k1: 'v1',
    k2: 'v2',
    text: 'sys'
};
func1(obj1);

function func2(num1, ...num2){
    console.log(num1);
    console.log(num2);
};
func2(1, 2, 3, 4, 5,);