/* gloabal Phaser */

class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "splashScene" });
    this.splashSceneBackgroundImage = null;
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff");
  }

  preload() {
    console.log("Splash Scene");
    this.load.image(
      "splashSceneBackground",
      "assets/splashSceneBackground.png",
    );
  }

  create(data) {
    this.splashSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "splashSceneBackground",
    );
    this.splashSceneBackgroundImage.x = this.cameras.main.width / 2;
    this.splashSceneBackgroundImage.y = this.cameras.main.height / 2;
  }

  update(time, delta) {
    if (time > 3000) {
      this.scene.start("titleScene");
    }
  }
}

export default SplashScene;
