const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function fastFunction(data) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const result = data * 2;
            console.log("Fast function done", result); // 20
            // reject(new Error("임시 에러")); // catch
            resolve(result); // then
        }, 1000);
    });
}

async function slowFunction(data) {
    await delay(3000);
    const result = data + 10;
    console.log("Slow function done", result); // 20
    return result;
}

async function runTasks() {
    let result = await fastFunction(10);
    result = await slowFunction(result);
    console.log("작업완료", result);
}

runTasks();
/**
> node .\23_asyncAwait.js
Fast function done 20
Slow function done 30
작업완료 30
 */
