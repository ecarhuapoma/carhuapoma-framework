// import { gsap } from "gsap";
// import { gsap } from "gsap";
// import { GSDevTools } from "gsap/GSDevTools";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// gsap.registerPlugin(GSDevTools,DrawSVGPlugin, MotionPathPlugin);

import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { EaselPlugin } from "gsap/EaselPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, EaselPlugin, ExpoScaleEase, RoughEase, SlowMo, MotionPathPlugin);

const mainTL = gsap.timeline();

//how do i center all the cone shapes so that they all line up better?

MorphSVGPlugin.convertToPath("circle");

// gsap.defaults({
//   ease: "power1"
// });
mainTL.set(".cone", {scale: 0.75, x:60, y:0});
mainTL.set("#cone10", {scale: 0.75, x:60,y:0});

mainTL.set(".stack", {scale: 0.8, x:40,y:-30});
mainTL.set(".vanilla", {scale: 0.75, x:0,y:0});
mainTL.set(".choc", {scale: 0.75, x:0,y:0});
mainTL.set(".straw", {scale: 0.75, x:0,y:0});
mainTL.set(".done", {scale: 0.75, x:0,y:0});
mainTL.set(".cher", {scale: 0.75, x:0,y:0});

function icecream(){
  const tl=gsap.timeline();
  tl.to(".cone", {stagger: .3, duration:.3, autoAlpha:1, ease:"steps (9)"});
  tl.to(".cone", {stagger: .3, duration:.3, autoAlpha:0, ease:"steps (9)"}, "-=2.5");
  tl.to("#cone10", {alpha:1});

  // tl.set(".cone", {stagger: .3, autoAlpha:1});
  // tl.set(".cone", {stagger: .4, autoAlpha:0},"-.02");
  return tl;
}

function coneTen(){
  const tl=gsap.timeline();
  tl.to(".cone10", {autoAlpha:1});
  return tl;
}

// function coneClose(){
//   const tl=gsap.timeline();
//   tl.to(".cone", {stagger: .3, duration:.2, autoAlpha:0, ease:"steps (10)"});
//   return tl;
// }

function vanilla(){
  const tl=gsap.timeline();
  // tl.to("#vanilla1", {stagger: .3, duration:.5, autoAlpha:1});
  // tl.to("#vanilla1", {stagger: .3, duration:.5, autoAlpha:0},"+=.3");

  // tl.to("#vanilla2", {stagger: .3, duration:.5, autoAlpha:1});
  // tl.to("#vanilla2", {stagger: .3, duration:.5, autoAlpha:0},"+=.3");

  // tl.to("#vanilla3", {stagger: .3, duration:.5, autoAlpha:1});
  // tl.to("#vanilla3", {stagger: .3, duration:.5, autoAlpha:0},"+=.3");

  tl.set("#vanilla1", {x: -500, y: -300});
  tl.set("#vanilla2", {x: -250, y: -450});
  tl.set("#vanilla3", {x: 0, y: -325})
  tl.to(".vanilla", {stagger: 1, duration:.3, autoAlpha:1, ease:"steps (1)"});
  tl.to(".vanilla", {stagger: 1, duration:.3, autoAlpha:0, ease:"steps (1)"},"-=1");
  // tl.to("#vanilla1", {stagger: .7, duration: .3, autoAlpha:0, ease:"steps (1)"}, "-=.95");
  return tl;
}

function vPlop(){
  const tl=gsap.timeline();
  // tl.set("#cream1", {scale: 0.75, x:60,y:0});
  // tl.set("#cream1", {scale: 0.8, x:40,y:-30});
  tl.to("#cream1", {autoAlpha:1});
  tl.set("#cone10", {duration:.3, autoAlpha:0},"-=.1");

  return tl;
}

function cPlop(){
  const tl=gsap.timeline();
  tl.set(".choc", {x:40,y:-400});
  tl.set(".choc", {autoAlpha:1});
  return tl;
}

// tl.to("#vanilla1", {stagger: .7, duration:.3, autoAlpha:1, ease:"steps (1)"});
//   tl.to("#vanilla1", {stagger: .7, duration: .3, autoAlpha:0, ease:"steps (1)"}, "-=.95");
//   tl.to("#vanilla2", {stagger: .7, duration:.3, autoAlpha:1, ease:"steps (1)"});
//   tl.to("#vanilla2", {stagger: .7, duration: .3, autoAlpha:0, ease:"steps (1)"}, "-=.95");



mainTL
.add(icecream())
.add(coneTen(),"-=.7")
// .add(coneClose())
.add(vanilla(),"+=1")
.add(vPlop(),"-=.5")
.add(cPlop());



// //header appears
// mainTL.from("header ul #open",{duration:.1,alpha:0})
// .from("header ul #open h1",{duration:.3,alpha:0})
// .from("header ul #wiggy, #cream",{duration:.3,alpha:0,scale:.5})
// .from("header ul #cone",{duration:.2,alpha:0,scale:.5})

// //buttons appear
// .from("section ul #directions, #menu, #about, #events",{duration:.5,alpha:0})
// .from("#body",{duration:.5,alpha:0});

// //rotating image
// const storeTL = gsap.timeline({repeat:-1});
// storeTL.from("#open",{duration:120,backgroundPosition: "-2247px 0px", ease:"none"});


GSDevTools.create();