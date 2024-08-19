abstract class TakePhoto {
  constructor(
    public cameraMode : string,
    public filter : string
  ) {}

  helloWorld() : void
  {
    console.log('====================================');
    console.log("Hello world");
    console.log('====================================');
  }

  abstract getSepia() : void
}

class Instagram extends TakePhoto {
  getSepia(): void {
    return;
  }
}

// const hc = new TakePhoto("test", "test");
const hc = new Instagram("test", "test");
hc.helloWorld();