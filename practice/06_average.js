/** p.83 연습문제 */
let strScores = " 90:30:80 ";

let scores = strScores.trim().split(':');
let math = parseInt(scores[0]);
let english = parseInt(scores[1]);
let science = parseInt(scores[2]);

let average = (math+english+science)/3;

console.log(average);
/**
66.66666666666667
 */