function spawnProcess() {
    setInterval(() => {
        spawnProcess();
        console.log(Math.random());
    }, 1000);
}

spawnProcess();
