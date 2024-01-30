"use strict";
var number = 5;
var text = "Hello";
var number2 = 5; // 'number' 타입으로 추론
var text2 = "Hello"; // 'string' 타입으로 추론
var bool1 = true;
var arr1 = ["a", "b", "c"];
var arr2 = ["a", "b", "c"];
var sample = [0, function () { }];
var anyValue = 1;
function func1(value) {
    /**
     * any는 거의 사용X
     * input 형식을 모를 때는 보통 unknown 타입 사용
     */
    console.log(value);
}
function func2(num1) {
    /**
     * ex) 이벤트 핸들러
     */
    console.log(num1);
}
var nullValue = null;
var undefinedValue = undefined;
