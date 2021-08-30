import './index.scss';
import * as objects from './objects';
import TWEEN from 'tween.js';
import * as PIXI from 'pixi.js'

const RATIO = 1390 / 640;
const root = document.getElementById('root');
const app = new PIXI.Application({ width: 1390, height: 640 });
root.append(app.view);

const keys = Object.keys(objects);
// sort objects by zIndex and then add to stage
keys.sort((key1, key2) => objects[key1].zIndex - objects[key2].zIndex)
    .forEach(key => app.stage.addChild(objects[key]));

app.ticker.add(() => {
  TWEEN.update();
});

// Ресайз немного не тот, что полагается, возможно
const resize = () => {
  let w, h;

  if ( window.innerWidth / window.innerHeight >= RATIO ) {
    w = window.innerHeight * RATIO;
    h = window.innerHeight;
  } else {
    w = window.innerWidth;
    h = window.innerWidth / RATIO;
  }
  app.renderer.view.style.width = w + 'px';
  app.renderer.view.style.height = h + 'px';
}

resize();
window.onresize = resize;