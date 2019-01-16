function doWork() {
    setInterval(() => {
        Math.random();
        window.WORKER_DEMO_ACCUMULATOR++;
        console.log(window.WORKER_DEMO_ACCUMULATOR);
    }, 1000);
}

function spawnProcess() {
    setInterval(() => {
        spawnProcess();
        doWork();
    }, 1000);
}

spawnProcess();

window.WORKER_DEMO_ACCUMULATOR = 0;