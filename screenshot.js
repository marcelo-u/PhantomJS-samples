var page = require('webpage').create();




//HTML4
//page.settings.userAgent = 'Mozilla/5.0 (Linux; U; Android 4.0.4; en-gb; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30';
//HTML5
page.settings.userAgent = 'Mozilla/5.0 (Linux; U; Android 4.0.4; en-gb; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30';

page.open('http://www.olx.com.bo', function () {
	    
    page.render('olx.png');
    phantom.exit();

});

