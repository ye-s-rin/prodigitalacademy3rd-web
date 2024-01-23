/** p.110 */
let x = [3, 6, 9, 20, -7, 5];
x.forEach((v, i) => {
    x[i] = v*10;
    console.log(v*10);
});
console.log();

let y = {"math": 70, "science": 80, "english": 20};
Object.keys(y).forEach((key) => {
    y[key]+=10;
    console.log(y[key]);
});
console.log();

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
    for(let i=1;i<10;i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
});

let num = 0;