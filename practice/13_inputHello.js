/** p.108 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(line){
    num = parseInt(line);
    rl.close();
});

rl.on('close', function() {
    for(let i=0;i<num;i++){
        console.log("안녕");
    }
});

console.log("정수를 입력해주세요: ");