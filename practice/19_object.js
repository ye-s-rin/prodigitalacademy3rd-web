const KEY = 'SAMPLE';
const obj1 = {
    name: 'John',
    sayHi: function(){
        console.log(`${this.name} 친구야 반갑다.`);
    },
    [KEY]: "sampleValue",
}

console.log(obj1);
console.log(obj1.name);
console.log(obj1['name']);
obj1.sayHi();

console.log(obj1.sampleKey);
console.log(obj1.SAMPLE);
console.log(obj1[KEY]);
/**
{ name: 'John', sayHi: [Function: sayHi], SAMPLE: 'sampleValue' }
John
John
John 친구야 반갑다.
undefined
sampleValue
sampleValue
 */

const obj2 = {
    name: 'John',
    sayHi: function(){
        console.log(`${this.name} 친구야 반갑다.`);
    },
    nested:{
        city: 'Seoul'
    },
    [KEY]: "sampleValue",
}
console.log(obj2.nested);

function func1(obj) {
    console.log(obj.nested.city);
}
func1(obj2);
// func1(obj1); // error

function func2(obj) {
    console.log(obj.nested?.city);
}
func2(obj2);
func2(obj1);