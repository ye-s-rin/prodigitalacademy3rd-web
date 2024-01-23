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
    if(num%15==0){
        console.log("3과 5의 공배수");
    }
    else if(num%3==0){
        console.log("3의 배수");
    }
    else if(num%5==0){
        console.log("5의 배수")
    }
    else{
        console.log(num);
    }
});

let num = 0;