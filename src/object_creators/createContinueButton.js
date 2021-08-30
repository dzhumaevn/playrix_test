import * as PIXI from "pixi.js";
import TWEEN from "tween.js";
import btnContinueSrc from "../images/btn_continue.png";

export default function createContinueButton() {
  const continueButton = PIXI.Sprite.from(btnContinueSrc);
  continueButton.position.set(1390 / 2, 500);
  continueButton.anchor.set(0.5, 0);
  continueButton.buttonMode = true;
  continueButton.interactive = true;
  continueButton.on('pointerdown', () => alert('clicked on btn'));
  continueButton.tween = new TWEEN.Tween(continueButton.scale)
    .to({ x: 0.95 }, 700)
    .repeat(Infinity)
    .yoyo(true)
    .onComplete(() => console.log(continueButton.scale.x))
    .start();

  return continueButton;
};