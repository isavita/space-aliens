/* global Phaser */
import SplashScene from "./splashScene.js";
import TitleScene from "./titleScene.js";
import MenuScene from "./menuScene.js";
import GameScene from "./gameScene.js";

// Game scene
const splashScene = new SplashScene();
const titleScene = new TitleScene();
const menuScene = new MenuScene();
const gameScene = new GameScene();

// Game scene
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  // Set background color
  backgroundColor: 0xffffff,
  scale: {
    mode: Phaser.Scale.FIT,
    // place it in the middle of the page
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

const game = new Phaser.Game(config);

// load scenes
game.scene.add("splashScene", splashScene);
game.scene.add("titleScene", titleScene);
game.scene.add("menuScene", menuScene);
game.scene.add("gameScene", gameScene);

// start scene
game.scene.start("splashScene");
