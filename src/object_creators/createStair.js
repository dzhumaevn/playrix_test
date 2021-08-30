import * as PIXI from 'pixi.js';
import TWEEN from 'tween.js';

import oldStairSrc from "../images/old_stair.png";
import newStair1 from '../images/new_stair_01.png';
import newStair2 from '../images/new_stair_02.png';
import newStair3 from '../images/new_stair_03.png';

const stairs = [
  { x: 908, y: 18, src: newStair1 }, { x: 898, y: 28, src: newStair2 }, { x: 910, y: -13, src: newStair3 }
];

export default function createStair() {
  const stair = PIXI.Sprite.from(oldStairSrc);
  stair.x = 833;
  stair.y = -20;

  stair.change = async (stairNum) => {
    await stair.hide();
    stair.texture = PIXI.Texture.from(stairs[stairNum].src);
    stair.x = stairs[stairNum].x;
    stair.y = -100;
    await stair.show(stairs[stairNum].y);
  };

  stair.hide = () => {
    return new Promise(resolve => {
      new TWEEN.Tween(stair).to({ y: 100, alpha: 0 }, 100)
                            .onComplete(resolve)
                            .start();
    });
  };

  stair.show = (stairY) => {
    return new Promise(resolve => {
      new TWEEN.Tween(stair).to({ y: stairY, alpha: 1 }, 500)
                            .easing(TWEEN.Easing.Bounce.Out)
                            .onComplete(resolve)
                            .start();
    });
  };

  return stair;
};