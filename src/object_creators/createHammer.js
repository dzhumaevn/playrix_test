import * as PIXI from "pixi.js";
import TWEEN from "tween.js";
import { menu } from "../objects";
import hammerSrc from "../images/hammer.png";


export default function createHammer() {
  const hammer = PIXI.Sprite.from(hammerSrc);
  hammer.position.set(1150, 350);
  hammer.buttonMode = true;
  hammer.anchor.set(0.5, 0.5);
  hammer.scale.set(0);

  show(hammer, 1000).then(() => {
    hammer.tween = new TWEEN.Tween(hammer)
      .to({ angle: 40 }, 1000)
      .yoyo(true)
      .repeat(Infinity)
      .easing(TWEEN.Easing.Bounce.Out)
      .start();

    hammer.interactive = true;
    hammer.on('pointerdown', () => {
      menu.show();
      hammer.tween.stop();
      hammer.destroy();
    });
  });

  return hammer;
};

function show(object, duration) {
  return new Promise(resolve => {
    new TWEEN.Tween(object.scale)
      .to({ x: 1, y: 1 }, duration)
      .delay(1000)
      .easing(TWEEN.Easing.Elastic.Out)
      .onComplete(() => {
        resolve();
      }).start();
  });
}