$(document).ready(function () {
    $('div.pageLoadedDiv').fadeIn(1000).removeClass('pageLoadedDiv');
window.onload = function() {
    
		// animation code
		TweenLite.from(".box-nc", 2, {autoAlpha:0, delay:0.75});
		TweenLite.set(".box-nc", {visibility:"visible"});

		var tl = new TimelineMax({paused:true});

		tl.to("#paperLogo", 0.25, {autoAlpha:0, progress:1})
		  .staggerTo("#lineLogo", 0.25, {autoAlpha:1, progress:1});

		tl.timeScale(1);

		$(".box-nc").hover(function(){
		  tl.play();
		},function(){
		  tl.reverse();
		})

TweenLite.render()};
});