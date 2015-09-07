const BIGWIDTH = 50000,
    ARRAY = 0,
    ATLAS = 1;
var type = null;

var Module = function() {
	var args = arguments[0] || {};
	var lastindex = 0;
	var self = Ti.UI.createView();
	if ( typeof args.images == 'object' && Array.isArray(args.images)) {
		type = ARRAY;
	} else if ( typeof args.images == 'string') {
		var atlasfile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, args.images);
		if (atlasfile.exists()) {
			type = ATLAS;
			var doc = Ti.XML.parseString(atlasfile.read().text);
			// TODO parsing atlas (sprites)
		} else console.log('Warning. cannot read atlas file');
	}
	if (type == ARRAY)
		self.add(Ti.UI.createImageView({
			image : args.images[lastindex]
		}));
	Object.getOwnPropertyNames(args).forEach(function(prop) {
		if (prop != 'images') {
			self[prop] = args[prop];
		}
	});
	var container = Ti.UI.createScrollView({
		scrollType : 'horizontal',
		backgroundColor : 'transparent',
		width : Ti.UI.FILL,
		contentWidth : Ti.UI.SIZE,
		height : Ti.UI.FILL,
		contentHeight : Ti.UI.FILL
	});
	container.add(Ti.UI.createView({
		backgroundColor : 'transparent',
		width : BIGWIDTH
	}));
	container.setContentOffset({
		x : BIGWIDTH,
		y : 0
	});

	container.addEventListener('scroll', function(_e) {
		console.log(_e.x);
		var ndx = (Math.floor((_e.x / args.width) * args.images.length) + args.images.length) % args.images.length;
		if (ndx != lastindex) {
			if (type == ARRAY) {
				self.children[0].setImage(args.images[ndx]);
			}
			lastindex = ndx;
		}
	});
	self.add(container);

	this.images = args.images;
	return self;

};

exports.createView = function(args) {
	return new Module(args);
};
