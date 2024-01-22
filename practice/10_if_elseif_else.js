/** p.100 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(line){
    scores = line.trim().split(' ').map(function(v, i, arr){
        return parseInt(v);
    });
    rl.close();
});

rl.on('close', function() {
    let answer = "합격";
    try{
        scores.forEach(function(score, i, scores){
            if(score<0 || score>100){
                answer = "잘못된 점수가 입력되었습니다.";
                throw new Error("stop loop");
            }
            else if(score <= 65){
                answer = "불합격";
                throw new Error("stop loop");
            }
        })
    }catch(e){}
    
    console.log(answer);
});

let scores=[];