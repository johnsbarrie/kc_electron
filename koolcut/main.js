var fs = require('fs');
var { app, BrowserWindow } = require('electron');
var { PreferenceProxy } = require('./io/PreferenceProxy');
var { ProjectsProxy } = require('./io/ProjectsProxy');
var { FFmpegProxy } = require('./io/FFmpegProxy');
//FFmpegProxy.startProcess();
/*


const { ipcMain } = require('electron');
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
*/

app.on('ready', function() {
	PreferenceProxy.load(function (success) {
		if (success) {
			ProjectsProxy.mapFromPath(PreferenceProxy.workspace, function (projectMap){
				loadWindow();
			});
		} else {
			console.log("preference file doesnot exist")
		}
	});
});

function loadWindow(){
		var mainWindow = new BrowserWindow({width: 1360, minWidth: 700, minHeight: 400, height: 800, show:false, icon: __dirname + '/kool-icon.icns', webSecurity: false});
		mainWindow.setTitle(require('./package.json').name);
		mainWindow.loadURL('file://' + __dirname + '/public/index.html');
		mainWindow.openDevTools();

		mainWindow.on('closed', function() {
			mainWindow = null;
			});

			mainWindow.webContents.on('did-finish-load', function() {
			setTimeout(function(){
				mainWindow.show();
			}, 40);
		});

}
