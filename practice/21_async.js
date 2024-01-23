function fastFunction(err, data, done) {
    setTimeout(function () {
        done(undefined, data * 2);
    }, 1000);
}

function slowFunction(err, data, don) {
    setTimeout(function () {
        done(undefined, data + 10);
    }, 3000);
}

function runTasks(callback) {
    // fastFunction 실행 -> slowFunction 실행
    fastFunction(undefined, 10, (err, data) => {
        if (err) return callback(err);
        console.log("fastFunction", data);
        // results of a: 10 * 2 = 20

        slowFunction(undefined, data, (err, data) => {
            if (err) return callback(err);
            console.log("slowFunction", data);
            // results of b: 20 + 10 = 30

            // here you can continue running more tasks
        });
    });
}

runTasks((err) => {
    console.error(err);
});
