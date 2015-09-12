### Ti.360°VIEW ###![](https://camo.githubusercontent.com/aab7a80c6cb487e82736414b2d9be1e969a3672e/687474703a2f2f676974742e696f2f62616467652e706e67)

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



