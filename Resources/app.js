! function() {
	var win = Ti.UI.createWindow({
		backgroundColor : 'white'
	});
	win.add(Ti.UI.createLabel({
		top : 50,
		text : 'Demo 360°View',
		font : {
			fontSize : 24
		}
	}));
	var View360 = require('de.appwerft.view360');
	var images = [];
	for (var i = 1; i < 29; i++)
		images.push('images/' + i + '.JPG');
	win.add(View360.createView({
		width : 320,
		height : 220,
		images : images
	}));
	win.open();
}();
