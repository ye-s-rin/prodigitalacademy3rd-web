function powerTs(a: number, b: number) {
    /**
     Parameter 'a' implicitly has an 'any' type, but a better type may be inferred from usage.ts(7044)
     */
    return a**b;
}

console.log(powerTs(10, 2));
// console.log(powerTs("10", "2")); // 타입 에러