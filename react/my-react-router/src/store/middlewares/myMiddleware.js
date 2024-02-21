export const myMiddleware = (store) => (next) => (action) => {
    let result = next(action);
    store.getState()
    return result;
};

export const timeoutScheduler = (store) => (next) => (action) => {
    if (!action.meta || !action.meta.delay) {
        return next(action);
    }

    let timeoutId = setTimeout(() => {
        return next(action);
    }, action.meta.delay);

    return () => {
        clearTimeout(timeoutId);
    };
};

export function myMiddleware2(store) {
    return function (next) {
        // next는 dispatch 함수
        return function (action) {
            // 처리할 작업
            return next(action);
        };
    };
}