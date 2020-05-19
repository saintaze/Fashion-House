var scenes = document.querySelectorAll('.scene');

scenes.forEach(s => {
	var parallaxInstance = new Parallax(s, {
		clipRelativeInput: true,
		hoverOnly: true,
		relativeInput: true
	});
});






















