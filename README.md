### Ti.360°VIEW ###![](https://camo.githubusercontent.com/0708b17f8cc6b5aa19d0cf5ef38e978c3cfc38e4/687474703a2f2f696d672e736869656c64732e696f2f62616467652f67697474696f2d312e302e302d3030423443432e737667)

This module allows to display 360° product photos. Currently we use single images. In futures we can use sprites.

Screencast
----------

![](https://github.com/AppWerft/Ti.360degreeView/raw/master/360view.gif)

Usage
-----

```javascript

! function() {
    var win = Ti.UI.createWindow();
    var View360 = require('de.appwerft.view360');
    var images = [];
    for (var i = 1; i < 29; i++) images.push('/images/' + i + '.JPG');
    win.add(View360.createView({
        width : 320,
        height : 240,
        images : images
    }));
    win.open();
}();

```



