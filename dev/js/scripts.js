import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { EaselPlugin } from "gsap/EaselPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, EaselPlugin, ExpoScaleEase, RoughEase, SlowMo, MotionPathPlugin, DrawSVGPlugin);

const mainTL = gsap.timeline();

mainTL.set("#rps-animation",{scale:1});
mainTL.set(".noses",{alpha:0});
mainTL.set(".type",{alpha:0,y:20});

function petDraw(){
    const tl=gsap.timeline();

    tl.from(".pets",{stagger:0.1,drawSVG:"100% 100%", ease:"power4.out", duration:3});
    tl.to(".noses",{autoAlpha:1, duration:.2},"-=2");

    return tl;
}

function typeAppear(){
    const tl=gsap.timeline();

    tl.to(".type",{autoAlpha:1,stagger:0.1,y:0,duration:.5,ease:"power3.out"});
    // tl.to(".type",{autoAlpha:1},"-=2");

    return tl;
}

// function twinkle(){
//     const tl=gsap.timeline({repeat:-1, yoyo:true});
//     // tl.fromTo(".stars-1",{duration:.5, alpha:.3},{stagger:0.3, alpha:1});
// }

// logoTwinkle();
// twinkle();

// mainTL.add(intro(),"-=2")
// .add(planetBuilding(),"-=1");


mainTL.add(petDraw())
.add(typeAppear(),"-=3");


GSDevTools.create();