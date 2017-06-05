var app = require('app');
var BrowserWindow = require('browser-window');

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
	mainWindow = new BrowserWindow({width: 1360, height: 800, show:false, icon: __dirname + '/kool-icon.icns'});
	mainWindow.setTitle(require('./package.json').name);
	mainWindow.loadUrl('file://' + __dirname + '/public/index.html');
	//mainWindow.openDevTools();

	mainWindow.on('closed', function() {
		mainWindow = null;
  	});  	

  	mainWindow.webContents.on('did-finish-load', function() {
    setTimeout(function(){
      mainWindow.show();
    }, 40);
  });
});


