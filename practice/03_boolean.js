/** p.72 연습문제 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let sum = 0;
let i = 0;
rl.on('line', function(line){
    sum += parseInt(line);
    i++;
    if (i>= 3){
        rl.close();
    }
});

rl.on('close', function() {
    console.log((sum/3)>65);
});
/**
> node .\03_boolean.js
10
20
30
false
 */