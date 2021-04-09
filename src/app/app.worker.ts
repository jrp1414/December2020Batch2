/// <reference lib="webworker" />

addEventListener('message', (evt) => {
    const num = evt.data;
    postMessage(fibonacci(num));
});

function fibonacci(num) {
    if (num == 1 || num == 2) {
        return 1
    }
    return fibonacci(num - 1) + fibonacci(num - 2)
}
