

var navFunc = function(){
	$('.nav-trigger-inner').on('click',function(){
		$('.nav-trigger').toggleClass('open');
		$('.nav-full').slideToggle();
	});
}

$(document).ready(function() {
	navFunc();
    $('#fullpage').fullpage({
    anchors: ['homePage', 'aboutPage', 'projectsPage', 'contactPage'],
		fadeEffect:true

});
});
