function doWork() {
    setInterval(() => {
        Math.random();
        accumulatorRef.value++;
        console.log(accumulatorRef.value);
    }, 1000);
}

var accumulatorRef = null;

onmessage = function(e) {
    accumulatorRef = e.data;
    doWork();
};
