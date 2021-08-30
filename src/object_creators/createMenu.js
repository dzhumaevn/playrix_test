import * as PIXI from "pixi.js";
import TWEEN from 'tween.js';

import createOkIcon from "./createOkIcon";

import menuItemInitialBgSrc from "../images/menu_item_initial_bg.png";
import menuItemActiveBgSrc from "../images/menu_item_active_bg.png";
import newStairIcon1Src from '../images/stair_icon1.png';
import newStairIcon2Src from '../images/stair_icon2.png';
import newStairIcon3Src from '../images/stair_icon3.png';
import { finalScreen, stair } from "../objects";

const state = { curSelectedStair: null }

const menuItems = [
  {
    bg: { x: 851, y: -11, src: menuItemInitialBgSrc },
    icon: { x: 895, y: -25, src: newStairIcon1Src },
  },
  {
    bg: { x: 979, y: -11, src: menuItemInitialBgSrc },
    icon: { x: 1022, y: -65, src: newStairIcon2Src },
  },
  {
    bg: { x: 1107, y: -11, src: menuItemInitialBgSrc },
    icon: { x: 1148, y: 10, src: newStairIcon3Src },
  }
];
const okIconPositions = [ { x: 860 }, { x: 990 }, { x: 1115 } ];

export default function createMenu() {
  const container = new PIXI.Container();
  container.rotation = -0.2;
  container.visible = false;

  const bgList = new PIXI.Container();
  const stairIconList = new PIXI.Container();

  const inactiveMenuItemBgTexture = PIXI.Texture.from(menuItemInitialBgSrc);
  const activeMenuItemBgTexture = PIXI.Texture.from(menuItemActiveBgSrc);

  const okIcon = createOkIcon();
  okIcon.on('pointerdown', () => finalScreen.show());

  container.addChild(bgList, stairIconList, okIcon);

  menuItems.forEach(({ bg, icon }, index) => {
    const menuItemBg = new PIXI.Sprite(inactiveMenuItemBgTexture);
    menuItemBg.position.set(bg.x, bg.y);

    const menuItemStairIcon = PIXI.Sprite.from(icon.src);
    menuItemStairIcon.position.set(icon.x, icon.y);
    menuItemStairIcon.buttonMode = true;
    menuItemStairIcon.interactive = true;

    menuItemStairIcon.on('pointerdown', () => {
      if ( state.curSelectedStair === index ) return;
      if ( state.curSelectedStair !== null ) {
        // set default bg for prev item menu
        const prevItemMenuBg = bgList.children[state.curSelectedStair];
        prevItemMenuBg.texture = inactiveMenuItemBgTexture;
      }

      state.curSelectedStair = index;

      // set active bg for selected item menu
      menuItemBg.texture = activeMenuItemBgTexture;

      // move ok icon to under selected item
      okIcon.visible = true;
      okIcon.tween.to({ x: okIconPositions[index].x }, 200).start();

      stair.change(index);
    });

    bgList.addChild(menuItemBg);
    stairIconList.addChild(menuItemStairIcon);
  });

  container.show = () => {
    container.visible = true;
    new TWEEN.Tween(container).to({ rotation: 0 }, 500).easing(TWEEN.Easing.Bounce.Out).start();
  };

  return container;
};