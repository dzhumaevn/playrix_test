import * as PIXI from 'pixi.js';
import finalScreenSrc from '../images/final_screen.png';

export default function createFinalScreen() {
  const finalScreen = PIXI.Sprite.from(finalScreenSrc);
  finalScreen.position.set(0, 0);
  finalScreen.visible = false;
  finalScreen.interactive = true;

  finalScreen.show = () => {
    finalScreen.visible = true;
  };

  return finalScreen;
};