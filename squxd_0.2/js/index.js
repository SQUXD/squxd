$(document).ready(function () {
    $('div.pageLoadedDiv').fadeIn(1000).removeClass('pageLoadedDiv');
window.onload = function() {
    
		// animation code
		TweenLite.from(".svg-container", 2, {autoAlpha:0, delay:0.75});
		TweenLite.set(".box-uxd, #xa-flip, .a, #x, #x-small", {visibility:"visible"});
		
		// FLIP "X" TO "A" + Diamond UP
		var tl = new TimelineMax({paused:true});
		
		tl.to("#x", 0.125, {scaleX:0, transformOrigin:"57% 43%", ease: Linear.easeNone, delay: 0.03, smoothOrigin:true}, 0)
		  .to("#diamond", 0.425, {ease:Elastic.easeOut.config(0.55, 0.85), yPercent:-33.5, fill:"#00bbd3", smoothOrigin:true}, "-=0.1")
		  .from(".a", 0.125, {autoAlpha:0, ease:Linear.easeNone}, "-=0.25")
		  .to("#a-small", 0.125, {scaleX:0, transformOrigin:"43% 57%", ease:Linear.easeNone, delay: 1.25, smoothOrigin:true}, "-=0.25")
		  .from("#x-small", 0.125, {scaleX:0, transformOrigin:"57% 43%", ease:Linear.easeNone, delay: 0.1, smoothOrigin:true}, "-=0.25")
		  .from("p", 0.5, {autoAlpha:0, delay: 0.35, ease:Linear.easeNone}, "+=0.1")
		
		tl.timeScale(1.2);
		
		$("#xa-flip").hover(function(){
		  tl.play();
		},function(){
		  tl.reverse();
		})
		
		// DIAMOND FLOAT/HOVER
		var loop=1, diamondTl = new TimelineMax({repeat:-1});
		
		diamondTl
		  .to("#diamond",0.4, {y:"-=2px", smoothOrigin:true, ease:Power1.easeOut, opacity:0.75}, "-=0.35")
		  .to("#diamond",0.35, {y:0, smoothOrigin:true, ease:Power1.easeOut, opacity:1}, "+=0.1");
		
		diamondTl.paused(true)
		  .add(function(){loop=0});
		$("#xa-flip").hover(function(){
		  diamondTl.play();
		},function(){
		  diamondTl.pause();
		  TweenLite.to(diamondTl, 0.25, {progress:1})
		});
		

TweenLite.render()};
});