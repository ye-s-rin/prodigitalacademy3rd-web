function fastFunction(data) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const result = data * 2;
            console.log("Fast function done", result); //20
            // reject(new Error("임시 에러")); // catch
            resolve(result); // then
        }, 1000);
    });
}

function slowFunction(data) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const result = data + 10;
            console.log("Slow function done", result); //30
            // reject(new Error("임시 에러")); // catch
            resolve(result); // then
        }, 3000);
    });
}

function runTasks() {
    // fastFunction 실행 -> slowFunction 실행
    return fastFunction(10)
        .then((data) => {
            return slowFunction(data);
        })
        .then((data) => {
            console.log("작업완료");
        })
        .catch((err) => {
            console.error(err);
        });
}

runTasks();
/**
> node .\22_promise.js
Fast function done 20
Slow function d
 */
