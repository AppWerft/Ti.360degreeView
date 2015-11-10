const BIGWIDTH = 50000,
    ARRAY = 0,
    ATLAS = 1;
var type = null;

var Widget = function() {
	var args = arguments[0] || {};
	var lastindex = 0;
	var self = Ti.UI.createView();
	if (Array.isArray(args.images) == false)
		return self;
	else {
		self.imagecontainer = Ti.UI.createView();
		args.images.forEach(function(imgurl) {
			self.imagecontainer.add(Ti.UI.createImageView({
				width : Ti.UI.FILL,
				height : Ti.UI.FILL,
				image : imageurl,
				opacity : 0
			}));
		});
		self.add(self.imagecontainer);

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
			x : BIGWIDTH/2,
			y : 0
		});
		container.addEventListener('scroll', function(_e) {
			console.log(_e.x);
			var ndx = (Math.floor((_e.x / args.width) * args.images.length) + args.images.length) % args.images.length;
			if (ndx != lastindex) {
				self.imagecontainer.children[lastindex].setOpacity(0);
				self.imagecontainer.children[ndx].setOpacity(1);
				lastindex = ndx;
			}
		});
		self.add(container);
		this.images = args.images;
		return self;
	}
};

exports.createView = function(args) {
	return new Widget(args);
};
