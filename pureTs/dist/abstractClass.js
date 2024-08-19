"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    helloWorld() {
        console.log('====================================');
        console.log("Hello world");
        console.log('====================================');
    }
}
class Instagram extends TakePhoto {
    getSepia() {
        return;
    }
}
// const hc = new TakePhoto("test", "test");
const hc = new Instagram("test", "test");
hc.helloWorld();
