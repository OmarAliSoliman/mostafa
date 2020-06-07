$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
    scrollHorizontally: true,
    navigation: true,
    navigationTooltips: ['Home', 'About', 'Project', 'Contact'],
    css3: true,
    scrollingSpeed: 1500,
    animateAnchor: true,
	});
});