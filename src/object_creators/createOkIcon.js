import * as PIXI from "pixi.js";
import okIconSrc from "../images/ok.png";
import TWEEN from "tween.js";

export default function createOkIcon() {
  const okIcon = PIXI.Sprite.from(okIconSrc);
  okIcon.position.set(860, 120);
  okIcon.visible = false;
  okIcon.buttonMode = true;
  okIcon.interactive = true;
  okIcon.tween = new TWEEN.Tween(okIcon).easing(TWEEN.Easing.Elastic.Out);

  return okIcon;
};