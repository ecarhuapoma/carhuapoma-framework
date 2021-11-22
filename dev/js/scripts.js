import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { EaselPlugin } from "gsap/EaselPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, EaselPlugin, ExpoScaleEase, RoughEase, SlowMo, MotionPathPlugin, DrawSVGPlugin);

const mainTL = gsap.timeline();

mainTL.set("#preloader",{scale:1.5, x:0, y:-1700});
mainTL.set(".stars",{scale:2,x:-150, y:-1400});
mainTL.set("#comet",{scale:2,x:-600, y:200});
mainTL.set(".planetStars",{scale:1.2,x:-25, y:-800});



gsap.timeline({onStart:mainTL.to("#comet",{x:700, y:-600, ease:"power3.in",duration:4,autoAlpha:.5})});


function intro(){
const tl=gsap.timeline();


// tl.set(".finalLogo",{autoAlpha:1});

// tl.to(".stars",{scale:1.99, duration:.5, yoyo:true, repeat:5});
// tl.to("#comet",{x:700, y:-600, ease:"power4.in",duration:4,autoAlpha:.5});


// tl.to("#comet",{y:600,duration:2},"sametime");
tl.to(".stars",{y:2000,duration:5,stagger:-.4,ease:"power4.inOut"},"-=3.5");
tl.to(".planetStars",{x:-25,y:-42,duration:2,ease:"power1.out"},"-=3");

return tl;
}

function planetBuilding(){
    const tl=gsap.timeline();
    
    tl.set(".logoParts",{autoAlpha:1});
    tl.from(".logoParts #Vector_14",{drawSVG:"100% 100%", ease:"power4.out", duration:3});
    tl.from(".logoParts #Vector_16",{drawSVG:"100% 100%", duration:.5},"-=1.3");
    tl.from(".logoParts #Vector_15",{drawSVG:"100% 100%", duration:.5}, "-=.8");
    tl.to(".orbit-word",{autoAlpha:1, duration:1},"-=.5");
    return tl;
}




mainTL.add(intro(),"-=2")
.add(planetBuilding(),"-=1");

GSDevTools.create();