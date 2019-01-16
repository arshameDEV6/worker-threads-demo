function spawnProcess() {
    setInterval(() => {
        spawnProcess();

        var spawnedWorker = new Worker('workerProcess.js');
        spawnedWorker.postMessage(accumulator);


    }, 5000);
}

spawnProcess();

var accumulator = {
    value: 0
};



/**
 * A better comparision would be a simple addition machine.
 * Keep track of some window integer and have workers add to it and have the single execution thread add to it.
 */
