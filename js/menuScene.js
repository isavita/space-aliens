/* global Phaser */

class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "menuScene" });
    this.menuSceneBackgroundImage = null;
    this.startButton = null;
  }

  preload() {
    console.log("Menu Scene");
    this.load.image("menuSceneBackground", "assets/aliens_screen_image2.jpg");
    this.load.image("startButton", "assets/start.png");
  }

  create(data) {
    this.menuSceneBackgroundImage = this.add
      .sprite(0, 0, "menuSceneBackground")
      .setScale(2.75);
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;
    this.menuSceneBackgroundImage.x = centerX;
    this.menuSceneBackgroundImage.y = centerY;

    this.startButton = this.add.sprite(centerX, centerY + 100, "startButton");
    this.startButton.setInteractive({ useHandCursor: true });
    this.startButton.on("pointerdown", () => this.clickButton());
  }

  update(time, delta) {}

  clickButton() {
    this.scene.switch("gameScene");
  }
}

export default MenuScene;
