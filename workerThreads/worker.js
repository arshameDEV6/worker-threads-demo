function spawnProcess() {
    setInterval(() => {
        spawnProcess();

        new Worker('workerProcess.js');

    }, 1000);
}

spawnProcess();
