/** p.26 이벤트 기반 */
function run() {
    console.log("3초 후 실행");
}
console.log("시작");
setTimeout(run, 3000);
console.log("끝");
/**
> node .\00_nonBlocking.js
시작
끝
3초 후 실행 
*/
