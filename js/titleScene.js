/* global Phaser */

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "titleScene" });
  }

  preload() {
    console.log("Title Scene");
  }

  create(data) {}

  update(time, delta) {}
}

export default TitleScene;
