let bn;
p5.disableFriendlyErrors = true

function preload() {
	ina=int(map(fxrand(),0,1,1,53))
	// print(ina)
  // bn = loadImage("/yön1/b ("+ina+").png");
  // bx=bn.width
  // by=bn.height
    for(r=0;r<400;r++){
  ina=int(map(fxrand(),0,1,1,53))
  this["bn"+r] = loadImage("/yön1/b ("+ina+").png"); 
  }
}

function setup() {
	pixelDensity(1)
	screen = [windowWidth, windowHeight]
     Adcanvas = sort(screen, 0);
    print("canvas",Adcanvas[0]);
    canvas = Adcanvas[0];
	canvas = 937
  createCanvas(canvas, canvas);
  background(255)
  cantem=createGraphics(canvas,canvas)
  gr=createGraphics(canvas,canvas)
  tt=createGraphics(canvas,canvas)
  cantem.background(10)
  cantem.push()
  cc=0
  
  document.getElementById("defaultCanvas0").style.width = Adcanvas[0]+"px";
document.getElementById("defaultCanvas0").style.height = Adcanvas[0]+"px";
  
  
  for(x1=0;x1<15;x1++){
			  for(x2=0;x2<15;x2++){
			 cantem.push()
				// print(ina)
			  // bn = loadImage("/yön1/b ("+ina+").png"); 
			  // save(bn)
			  bn=eval("bn"+cc)
			bn.resize(200,0)
			// bright2()
			bx=bn.width
			  by=bn.height

			  cantem.translate(0,-bn.height)
			  cantem.image(bn,-600+canvas-x2*100+x1*160,-100+60*x2+x1*93)
			  cantem.pop()
			  cc++
			  }
  }
			  
  // cantem.rect(0,0,20,20)
  // save(imgTemp)
  // scale(2)
  

					// imgTemp=createGraphics(bx,by)
			// imgTemp.image(bn,0,0)
			cantem.noStroke()
			cantem.fill(255,255,255,140)
			cantem.rect(0,0,canvas,canvas)
			
			// bright(30)
			// cantem.clear()
			// cantem.image(cantem,0,0)
			  makeDithered(cantem, 1);
													s=3
		cantem.translate(canvas/2,canvas/2)
		cantem.scale(s)	  
		cantem.translate(-canvas/2,-canvas/2)
		cantem.copy(cantem,0,0,canvas,canvas,0,0,canvas,canvas)//sürekısalt
rx=[]
ry=[]
 vecx=[]
  vecy=[]
   tx=[]
	ty=[]
	
	cy=[]
	cx=[]
	for (let i = 0; i < canvas; i ++) {
	append(cx,0)
	}
	
cantem.loadPixels();
let pD = pixelDensity();
  let halfImage = 5 * (width * pD) * (height * pD);//pixel density. pixels.lenght
  for (let i = 0; i < halfImage; i += 4) {
	  // print(img.pixels[i])
    if (cantem.pixels[i] == 0 ){
		append(rx,int(i/4)%cantem.width)
		append(ry,int(int(i/4)/cantem.width))
		// tt.push()
		cx[int(int(i/4)/cantem.width)]+=1
		// cy[int(i/4)%cantem.width]+=1
		// tt.pop()
		// tt.circle(floor(i/4)%cantem.width,floor(floor(i/4)/cantem.width),2)
	}

  }
print(rx.length)

// image(cantem, 0, 0);
// image(tt, -50, -50);
 cantem.pop()
// bright(20)
  // filter(GRAY);
  // filter(INVERT);
  
  print(cx)

	 // for(h1=0;h1<rx.length;h1++){
	// append(tx,rand(-0,canvas))
	 // }
	 
	 // for(h1=0;h1<rx.length;h1++){
	// append(ty,rand(-0,canvas))
	 // }
	 
	
	// kenar=sqrt(rx.length)
	
	kenar=canvas
	print("kenar",kenar)
	for(h1=0;h1<kenar;h1++){
		for(h2=0;h2<cx[h1];h2++){
	append(tx,map(h2,0,cx[h1],0,canvas))
	append(ty,h1)
	 }
	 }
	 
	 
	 
	 // kenar=canvas
	// print("kenar",kenar)
	// for(h1=0;h1<rx.length;h1++){
	// append(tx,rx[h1]+rand(50,-50))
	// append(ty,ry[h1]+rand(50,-50))
	 // }


	 // gr.
	 gr.background(255)
	 addGrain(100)
	 gr.filter(GRAY);
	 
	
	// tx=rx
	
  // for(h1=0;h1<rx.length;h1++){
	// append(tx,rx[h1]+rand(-10,10))
  // }
  
  // for(h1=0;h1<rx.length;h1++){
	// append(ty,ry[h1]+rand(-10,10))
  // }
  
  // append(vecx,rx[dc]-tx)
  // append(vecy,ry[dc]-ty)
  
  
  // for(q=0;q<rx.length;q++){
	  // this["v"+q]=createVector(rx[q]-tx[q],ry[q]-ty[q])
  // }
  
  // for (let qw = 0; qw < 200; qw ++) {
  // loadPixels();
  // let pD = pixelDensity();
  // let halfImage = 5 * (width * pD) * (height * pD);//pixel density. pixels.lenght
  // for (let i = 0; i < halfImage; i += 4) {
    // pixels[i] = map(pixels[i],0,255,qty,255)
    // pixels[i + 1] = map(pixels[i+ 1],0,255,qty,255)
    // pixels[i + 2] = map(pixels[i+ 2],0,255,qty,255)
  // }
  // updatePixels();
   // }
  
  
  
  
  // fark=100
  // for(dc=0;dc<rx.length;dc++){
	  // for(dr=0;dr<rx.length;dr++){
	  // te=dist(rx[dc],ry[dc],tx[dr],ty[dr])
	  // if (te<fark){
		  // fark=te
			// farkx=tx[dr]
			// farky=ty[dr]
	  // }
  // }
  // append(vec,rx[dc]-farkx)
  // append(vec,ry[dc]-farky)
  // }  
  
  
  // for(dc=0;dc<rx.length;dc++){
  // v1 = createVector(rx[q]-tx[q],ry[q]-tx[q])
  // }
  stroke(0,0,0,255)
		strokeWeight(0)
		fill(0)
		// fill(rand(0,255),rand(0,255),rand(0,255))
}
op=0
after=0




function draw(){
	// frameRate(200)
	// return
	// background(255)
	image(gr,0,0)
	
	// drawingContext.shadowBlur = 5
	// drawingContext.shadowColor = color(0)
	// print("ss")
	// noLoop()
	
		// tt.point(int(i/4)%cantem.width,int(int(i/4)/cantem.width))
		
		// v1.mult(0.01)
		// v1.mult(op)
		
		startingDec=0.3
				factor=50
		
		if(op+2>factor){
				for(q=0;q<rx.length;q++){
				rect(rx[q]+rand(0,.5),ry[q]+rand(0,.5),s,s)	
				}
				if(after==20){
					image(gr,0,0)
						// drawingContext.shadowBlur = 5
						// drawingContext.shadowColor = color(0)
					// clear()
					for(q=0;q<rx.length;q++){
					rect(rx[q],ry[q],s,s)	
					// rect(rx[q]+rand(0,.5),ry[q]+rand(0,.5),s,s)	
					}
					// noLoop()
					return
				}
				after++
				// print
				}else{

		
		for(q=0;q<rx.length;q++){
				// rect(rx[q]+rand(0,1),ry[q]+rand(0,1),3,3)
				
				
				
				v1=createVector(rx[q]-tx[q],ry[q]-ty[q])
				v1.mult(startingDec+(1/(factor))*op*(1-startingDec))
				rect(v1.x+tx[q],v1.y+ty[q],s,s)
				// fill(rand(0,255),rand(0,255),rand(0,255))
				// circle(v1.x+tx[q],v1.y+ty[q],s)
				// rect(rx[q],ry[q],3,3)
				
				// FPS = 50
    // frameRate(FPS)
    // createLoop({duration:3, gif:true})
				// point(v1.x+tx[q],v1.y+ty[q])
				// print(q,w)
			}
				}
			
		// v1.mult(op)
			
			
		print(op)
	op++
	
	// loadPixels();
  // let pD = pixelDensity();
  // let halfImage = 5 * (width * pD) * (height * pD);//pixel density. pixels.lenght
  // for (let i = 0; i < halfImage; i += 4) {
    // pixels[i] = rand(0,255)
    // pixels[i + 1] = rand(0,255)
    // pixels[i + 2] = rand(0,255)
  // }
  // updatePixels();
	
	
	
}














function imageIndex(img, x, y) {
  return 4 * (x + y * img.width);
}

function getColorAtindex(img, x, y) {
  let idx = imageIndex(img, x, y);
  let pix = img.pixels;
  let red = pix[idx];
  let green = pix[idx + 1];
  let blue = pix[idx + 2];
  let alpha = pix[idx + 3];
  return color(red, green, blue, alpha);
}

function setColorAtIndex(img, x, y, clr) {
  let idx = imageIndex(img, x, y);

  let pix = img.pixels;
  pix[idx] = red(clr);
  pix[idx + 1] = green(clr);
  pix[idx + 2] = blue(clr);
  pix[idx + 3] = alpha(clr);
}

// Finds the closest step for a given value
// The step 0 is always included, so the number of steps
// is actually steps + 1
function closestStep(max, steps, value) {
  return round(steps * value / 255) * floor(255 / steps);
}

function makeDithered(img, steps) {
  img.loadPixels();

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let clr = getColorAtindex(img, x, y);
      let oldR = red(clr);
      let oldG = green(clr);
      let oldB = blue(clr);
      let newR = closestStep(255, steps, oldR);
      let newG = closestStep(255, steps, oldG);
      let newB = closestStep(255, steps, oldB);

      let newClr = color(newR, newG, newB);
      setColorAtIndex(img, x, y, newClr);

      let errR = oldR - newR;
      let errG = oldG - newG;
      let errB = oldB - newB;

      distributeError(img, x, y, errR, errG, errB);
    }
  }

  img.updatePixels();
  
}

function distributeError(img, x, y, errR, errG, errB) {
  addError(img, 7 / 16.0, x + 1, y, errR, errG, errB);
  addError(img, 3 / 16.0, x - 1, y + 1, errR, errG, errB);
  addError(img, 5 / 16.0, x, y + 1, errR, errG, errB);
  addError(img, 1 / 16.0, x + 1, y + 1, errR, errG, errB);
}

function addError(img, factor, x, y, errR, errG, errB) {
  if (x < 0 || x >= img.width || y < 0 || y >= img.height) return;
  let clr = getColorAtindex(img, x, y);
  let r = red(clr);
  let g = green(clr);
  let b = blue(clr);
  clr.setRed(r + errR * factor);
  clr.setGreen(g + errG * factor);
  clr.setBlue(b + errB * factor);

  setColorAtIndex(img, x, y, clr);
  // circle(x,y,0.1)
}




function bright(qty = 20) {
  loadPixels();
  let pD = pixelDensity();
  let halfImage = 5 * (width * pD) * (height * pD);//pixel density. pixels.lenght
  for (let i = 0; i < halfImage; i += 4) {
    pixels[i] = map(pixels[i],0,255,qty,255)
    pixels[i + 1] = map(pixels[i+ 1],0,255,qty,255)
    pixels[i + 2] = map(pixels[i+ 2],0,255,qty,255)
  }
  updatePixels();
}


function bright2(qty = 20) {
	aa=floor(map(fxrand(),0,1,0,3))
  bn.loadPixels();
  let pD = pixelDensity();
  let halfImage = 5 * (width * pD) * (height * pD);//pixel density. pixels.lenght
  for (let i = 0; i < halfImage; i += 4) {
	  
    // bn.pixels[i] = bn.pixels[i]+random(10,50)
    bn.pixels[i + aa] = bn.pixels[i+ aa]+100
    // bn.pixels[i + 2] = bn.pixels[i+ 2]+random(10,50)
  }
  bn.updatePixels();
}


function rand(x,y){
	return map(fxrand(),0,1,x,y)
}

function addGrain(qty = 20) {
  gr.loadPixels();
  let pD = pixelDensity();
  let halfImage = 5 * (width * pD) * (height * pD);//pixel density. pixels.lenght
  for (let i = 0; i < halfImage; i += 4) {
    gr.pixels[i] += round(qty * (fxrand() - 0.5));
    gr.pixels[i + 1] += round(qty * (fxrand() - 0.5));
    gr.pixels[i + 2] += round(qty * (fxrand() - 0.5));
  }
  gr.updatePixels();
}