function spawnProcess() {
    setInterval(() => {
        spawnProcess();

        new Worker('workerProcess.js');

    }, 1000);
}

spawnProcess();

/**
 * A better comparision would be a simple addition machine.
 * Keep track of some window integer and have workers add to it and have the single execution thread add to it.
 */
