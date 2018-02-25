var slider = document.getElementById('slider');

noUiSlider.create(slider, {
	start: [0.5, 4.5],
	connect: true,
	step: 0.5,
	range: {
		'min': 0,
		'max': 5
	},
});
