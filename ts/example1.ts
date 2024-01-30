let number: number = 5;
let text: string = "Hello";

let number2 = 5; // 'number' 타입으로 추론
let text2 = "Hello"; // 'string' 타입으로 추론

let bool1: boolean = true;

let arr1: String[] = ["a", "b", "c"];
let arr2: Array<String> = ["a", "b", "c"];

let sample: [number, Function] = [0, () => {}];

let anyValue: any = 1;
function func1(value: any) {
  /**
   * any는 거의 사용X
   * input 형식을 모를 때는 보통 unknown 타입 사용
   */
  console.log(value);
}

function func2(num1: number): void {
  /**
   * ex) 이벤트 핸들러
   */
  console.log(num1);
}

let nullValue: null = null;
let undefinedValue: undefined = undefined;
