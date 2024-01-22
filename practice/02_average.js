/** p.65 연습문제 */
function run() {
    let mike = 80;
    let judy = 75;
    let sera = 100;
    let students = [mike, judy, sera];

    let scores = students.reduce((a, b) => a + b, 0);

    console.log(scores/students.length);
}
run()
/**
> node .\02_average.js
85
*/