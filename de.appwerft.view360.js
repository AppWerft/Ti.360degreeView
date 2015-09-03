var Module = function(args) {
	var self = Ti.UI.createView();
	Object.getOwnPropertyNames(args).forEach(function(prop){
		if (prop != 'images') {
			self[prop] = args[prop];
		}
	});
	this.images = args.images;
	return self;
	
};

exports.createView = function(args) {
	return new Module();
}; 