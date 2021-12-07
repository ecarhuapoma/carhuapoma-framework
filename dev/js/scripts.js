import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { EaselPlugin } from "gsap/EaselPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, EaselPlugin, ExpoScaleEase, RoughEase, SlowMo, MotionPathPlugin, DrawSVGPlugin);

const mainTL = gsap.timeline();

mainTL.set("#preloader",{x:0, y:-1250});
mainTL.set(".stars",{scale:2,x:-150, y:-1400});
mainTL.set("#comet",{scale:2,x:-600, y:200});
mainTL.set(".planetStars",{scale:1.2,x:-25, y:-800});
// mainTL.set(".logo-stars",{alpha:1});

mainTL.set(".stars-1",{alpha:1});
mainTL.set(".stars-2",{alpha:1});
mainTL.set(".stars-3",{alpha:1});


// twinkle();

// function twinkle(){
//     const tl=gsap.timeline();
//     tl.fromTo(".stars-1",{duration:0.01, alpha:1},{stagger:0.1, alpha:.3});
    
// // tl.fromTo(".logo-stars",{duration:0.1, alpha:1},{stagger:0.3, alpha:.3});
// }


gsap.timeline({onStart:mainTL.to("#comet",{x:700, y:-600, ease:"power4.inOut",duration:4,autoAlpha:.5})});


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

function logoTwinkle(){
    const tl=gsap.timeline({repeat:-1, yoyo:true});
    tl.fromTo(".logo-stars",{duration:.1, alpha:.3},{stagger:.3, alpha:1});
    return tl;
}

function twinkle(){
    
    const tl=gsap.timeline({repeat:-1, yoyo:true});
    // tl.fromTo(".stars littleStars",{duration:.1, alpha:.3},{stagger:.3, alpha:1});
    tl.fromTo(".stars-1",{duration:.5, alpha:.3},{stagger:0.1, alpha:1});
    tl.fromTo(".stars-2",{duration:.5, alpha:.3},{stagger:0.1, alpha:1},"-=2");
    tl.fromTo(".stars-3",{duration:.5, alpha:.3},{stagger:0.1, alpha:1},"-=2");
    
    return tl;
}

function endStars(){
    const tl=gsap.timeline();

    tl.to(".logo-stars",{duration:.5, alpha:1});



    return tl;
}


twinkle();
logoTwinkle();



mainTL.add(intro(),"-=2")
// .add(twinkle())

.add(planetBuilding(),"-=1")
.add(endStars());
// .add(logoTwinkle());




GSDevTools.create();