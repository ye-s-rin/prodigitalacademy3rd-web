/** p.109 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.on() 함수의 첫번째 문자열 매개변수는 Event 결정자
// 'line': input
rl.on('line', function(line){
    num = parseInt(line);
    rl.close();
});

rl.on('close', function() {
    for(let i=num;i>0;i--){
        console.log("*".repeat(i));
    }
});

console.log("정수를 입력해주세요: ");