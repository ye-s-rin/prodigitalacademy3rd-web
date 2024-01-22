/** p.55 변수 */
function sample1() {
    console.log(name1);
    if(true){
        let name1 = 1;
    }
    console.log(name1);
}
function sample2() {
    if(true){
        let name2 = 2;
    }
    console.log(name2);
}
function sample3() {
    console.log(name3);
    if(true){
        var name3 = 3;
    }
    console.log(name3);
}
// sample1(); //error
// sample2(); //error
sample3();
/**
> node .\01_variable.js
undefined
3
*/