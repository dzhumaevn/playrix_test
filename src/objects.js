import * as PIXI from 'pixi.js';

import mainBgSrc from './images/back.jpg';
import austinSrc from './images/Austin.png';
import logoSrc from './images/logo.png';
import plantSrc1 from './images/plant_1.png';
import plantSrc2 from './images/plant_2.png';
import globeSrc from './images/globe.png';
import tableSrc from './images/table.png';
import sofaSrc from './images/sofa.png';
import bookStandSrc from './images/book_stand.png';

import createHammer from "./object_creators/createHammer";
import createStair from "./object_creators/createStair";
import createMenu from "./object_creators/createMenu";
import createFinalScreen from "./object_creators/createFinalScreen";
import createContinueButton from "./object_creators/createContinueButton";

// main background
const mainBG = PIXI.Sprite.from(mainBgSrc);
// stair
const stair = createStair();

// decors
const plant1 = PIXI.Sprite.from(plantSrc1);
plant1.x = 115;
plant1.y = 151;

const plant2 = PIXI.Sprite.from(plantSrc2);
plant2.x = 1122;
plant2.y = 438;

const globe = PIXI.Sprite.from(globeSrc);
globe.x = 87;
globe.y = 109;

const table = PIXI.Sprite.from(tableSrc);
table.x = 202;
table.y = 196;

const sofa = PIXI.Sprite.from(sofaSrc);
sofa.x = 127;
sofa.y = 324;

const bookStand = PIXI.Sprite.from(bookStandSrc);
bookStand.x = 834;
bookStand.y = -28;

const hammer = createHammer();

// Austin
const austin = PIXI.Sprite.from(austinSrc);
austin.x = 696;
austin.y = 113;

// logo
const logo = PIXI.Sprite.from(logoSrc);
logo.x = 32;
logo.y = 5;

// continue button
const continueButton = createContinueButton();

// menu
const menu = createMenu();

// final screen
const finalScreen = createFinalScreen();

mainBG.zIndex = -1;
stair.zIndex = 0;
plant1.zIndex = 1;
plant2.zIndex = 1;
globe.zIndex = 1;
table.zIndex = 1;
sofa.zIndex = 1;
bookStand.zIndex = 1;
austin.zIndex = 2;
hammer.zIndex = 2;
menu.zIndex = 3;
finalScreen.zIndex = 4;
logo.zIndex = 4;
continueButton.zIndex = 5;

export {
  austin,mainBG, stair, plant1, plant2, globe, table, sofa,
  bookStand,  hammer, menu, finalScreen, logo, continueButton
};