var tl = new TimelineMax({repeatDelay:1, repeat:50, repeatDelay:2, yoyo:true});

//don't need timeline but keeping it for eg
// hamburger animation
tl.to("#pizza", 2, {rotation:360, transformOrigin:"50% 50%", delay:0});

// waffle animation
var t2 = new TimelineMax({repeat:100, repeatDelay:1});
t2.to("#waffle1", 2, {rotation:360, transformOrigin:"50% 50%", delay:1, });
t2.to("#waffle2", 2, {rotation:360, transformOrigin:"50% 50%", delay:1, });
t2.to("#waffle3", 2, {rotation:360, transformOrigin:"50% 50%", delay:1, });
t2.to("#waffle4", 2, {rotation:360, transformOrigin:"50% 50%", delay:1, });

// fries animation

var tl3 = new TimelineMax({repeat:200, repeatDelay:0, yoyo:true});

tl3.to(".fries", 1, {rotation:30, ease: Power0.easeNone})
tl3.to(".fries", 1, {rotation:-30, ease: Power0.easeNone})
//TweenMax.to(".fries", 1, {rotation:-30, yoyo:true})


//animating the "wrap" aka the second fries separator
var tl4 = new TimelineMax({repeat:100, repeatDelay:0});

tl4.to(".wrap", 3, {x:300, ease:Bounce.easeOut})
tl4.to(".wrap", 3, {x:0, ease:Bounce.easeOut})

// animating salads

var tl5 = new TimelineMax({repeat:200, repeatDelay:0, yoyo:true});

tl5.to(".salad", 1, {rotation:20, ease: Power0.easeNone})
tl5.to(".salad", 1, {rotation:-20, ease: Power0.easeNone})
// animating the third fries separator

TweenMax.to(document.getElementById("friesthree"), 5, {bezier:{type:"soft", values:[{x:50, y:100}, {x:150, y:0}, {x:225, y:100}, {x:300, y:0}], autoRotate:true}, ease:Power1.easeInOut, repeat:100, yoyo:true});

//pancakes animation
TweenMax.to(document.getElementById("pancakes"), 13, {bezier:{type:"soft", values:[{x:100, y:100}, {x:200, y:0}, {x:300, y:100}, {x:400, y:0}], autoRotate:false}, ease:Bounce.easeOut, repeat:100, yoyo:true});
