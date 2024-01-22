/** p.101 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(line){
    console.log("정수를 입력해주세요: ");
    if(parseInt(line) & 1 == 1){
        console.log(`입력하신 ${line}은 홀수입니다.`);
    }
    else{
        console.log(`입력하신 ${line}은 짝수입니다.`);
    }
    // rl.close();
});

rl.on('close', function() {
});

console.log("정수를 입력해주세요: ");