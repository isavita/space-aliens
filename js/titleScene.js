/* global Phaser */

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "titleScene" });
    this.titleSceneBackgroundImage = null;
    this.titleSceneText = null;
    this.titleSceneTextStyle = {
      font: "200px Times",
      fill: "#fde4b9",
      align: "center",
    };
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff");
  }

  preload() {
    console.log("Title Scene");
    this.load.image("titleSceneBackground", "assets/aliens_screen_image.jpg");
  }

  create(data) {
    this.titleSceneBackgroundImage = this.add
      .sprite(0, 0, "titleSceneBackground")
      .setScale(2.75);
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;
    this.titleSceneBackgroundImage.x = centerX;
    this.titleSceneBackgroundImage.y = centerY;
    this.titleSceneText = this.add
      .text(centerX, centerY + 350, "Space Aliens", this.titleSceneTextStyle)
      .setOrigin(0.5);
  }

  update(time, delta) {}
}

export default TitleScene;
