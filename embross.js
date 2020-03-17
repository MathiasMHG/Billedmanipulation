let slider;
let img;
let repeat;
function preload() {
img = loadImage('mps.jpg');
}

function setup() {
w = img.width;
h = img.height;
createCanvas(2 * w, h);
noStroke();
img.loadPixels();
repeat = 0;
slider = createSlider(0, 1  , 0,1);
slider.position(w-40, 320);
slider.style('width', '80px');
}

function draw() {
repeat = slider.value()
ownFilter();
image(img, w, 0);
}

function ownFilter() {
for (let i = 0; i < w; i += 1) {
  for (let j = 0; j < h; j += 1) {
    if (repeat==0) {
      fill([theFilter(0,i,j),  theFilter(1,i,j),  theFilter(2,i,j)]);
      rect(i, j, 1, 1);
    }
    else if (repeat==1) {
      fill([theFilter1(0,i,j),  theFilter1(1,i,j),  theFilter1(2,i,j)]);
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
c = 5*getPixelValue(n,i, j)-(getPixelValue(n,i-1, j)*(-5)+getPixelValue(n,i+1, j)*(5)+
getPixelValue(n,i, j-1)*(-5)+getPixelValue(n,i, j+1)*5)+getPixelValue(n,i+1,j+1)*(-10)+getPixelValue(n,i-1,j-1)*(10);
return c;
}


function getPixelValue(n,i,j){
p = img.pixels[(i+w*j)*4+n];
return p;
}
