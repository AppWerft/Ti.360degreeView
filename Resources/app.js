! function() {
	var win = Ti.UI.createWindow();
	var View360 = require('de.appwerft.view360');
	var images = [];
	for (var i = 1; i < 29; i++)
		images.push('/images/' + i + '.JPG');
	win.add(View360.createView({
		width : 320,
		height : 240,
		images : images
	}));
	win.open();
}();
