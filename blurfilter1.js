let img;
let filterType;
let slider;
function preload() {
  img = loadImage('mps.jpg');
}

function setup() {
  w = img.width;
  h = img.height;
  createCanvas(2 * w, h);
  noStroke();
  img.loadPixels();
  filterType = 0;
  slider = createSlider(0, 3  , 0,1);
  slider.position(10, 10);
  slider.style('width', '80px');
}

function draw() {
  filterType = slider.value()
  ownFilter();
  image(img, w, 0);
}

function ownFilter() {
  for (let i = 0; i < w; i += 1) {
    for (let j = 0; j < h; j += 1) {
      if(filterType==0){
      fill([theFilter(0,i,j),  theFilter(1,i,j),  theFilter(2,i,j)]);
      rect(i, j, 1, 1);
      }
      else if(filterType==1){
        fill([theFilter1(0,i,j)/5,  theFilter1(1,i,j)/5,  theFilter1(2,i,j)/5]);
        rect(i, j, 1, 1);
      }
      else if (filterType==2) {
        fill([theFilter2(0,i,j)/9,  theFilter2(1,i,j)/9,  theFilter2(2,i,j)/9]);
        rect(i, j, 1, 1);
      }
      else if(filterType==3) {
        fill([theFilter3(0,i,j)/21,  theFilter3(1,i,j)/21,  theFilter3(2,i,j)/21]);
        rect(i, j, 1, 1);
      }
    }
  }
}

function theFilter(n,i,j){
  c = getPixelValue(n,i, j);
  return c;
}

function theFilter1(n,i,j){
  c = getPixelValue(n,i, j)+getPixelValue(n,i-1,j)+getPixelValue(n,i+1,j)+getPixelValue(n,i,j-1)+getPixelValue(n,i,j+
  1);
  return c;
}

function theFilter2(n,i,j){
  c = getPixelValue(n,i, j)+getPixelValue(n,i-1,j)+getPixelValue(n,i+1,j)+getPixelValue(n,i,j-1)+getPixelValue(n,i,j+
  1)+getPixelValue(n,i-2,j)+getPixelValue(n,i+2,j)+getPixelValue(n,i,j-2)+getPixelValue(n,i,j+
  2);
  return c;
}

function theFilter3(n,i,j){
  c = getPixelValue(n,i, j)+getPixelValue(n,i-1,j)+getPixelValue(n,i+1,j)+getPixelValue(n,i,j-1)+getPixelValue(n,i,j+
  1)+getPixelValue(n,i-2,j)+getPixelValue(n,i+2,j)+getPixelValue(n,i,j-2)+getPixelValue(n,i,j+
  2)+getPixelValue(n,i-1,j-1)+getPixelValue(n,i-1,j+1)+getPixelValue(n,i+1,j-1)+getPixelValue(n,i+1,j+1)+
  getPixelValue(n,i-3,j)+getPixelValue(n,i+3,j)+getPixelValue(n,i,j-3)+getPixelValue(n,i,j+
  3)+getPixelValue(n,i-2,j-2)+getPixelValue(n,i-2,j+2)+getPixelValue(n,i+2,j-2)+getPixelValue(n,i+2,j+2);
  return c;
}


function getPixelValue(n,i,j){
  p = img.pixels[(i+w*j)*4+n];
  return p;
}
