var app = require('app');
var BrowserWindow = require('browser-window');
var fs = require('fs');
var osenv = require('osenv');
var xml2js = require('xml2js');
const { ipcMain } = require('electron');

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
	mainWindow = new BrowserWindow({width: 1360, height: 800, show:false, icon: __dirname + '/kool-icon.icns'});
	mainWindow.setTitle(require('./package.json').name);
	mainWindow.loadUrl('file://' + __dirname + '/public/index.html');
	mainWindow.openDevTools();

	mainWindow.on('closed', function() {
		mainWindow = null;
  	}); 	

  	mainWindow.webContents.on('did-finish-load', function() {
    setTimeout(function(){
      mainWindow.show();
    }, 40);
  });
});


//ipcMain.on('synchronous-message', (event, arg) => {
  _readProjects(function (projects){
    _readShots(projects);
  });
//});

function _readProjects (cb) {
  _getWorkSpace(function (workspace) {
    _listDir(workspace, function (projects) {
      cb(projects);
    });
  });
};

function _readShots(projects){
  projects.map(function (project){
  _getWorkSpace(function (workspace) {
    _listDir([workspace, 'shots', project].join("/"), function(shot){
      console.log("sqdf")
    });
  });
}

function _listDir(path, cb) {
  cb(fs.readdirSync(path).filter(function(file){
    if (! /^\./.test(file)) { return true; }
    return false;
  }));
}

function _getWorkSpace(cb) {
  var preferenceFile = osenv.home() + '/Library/Preferences/com.lamenagerie.koolcapture/Local\ Store/settings/preference.xml';
  _parseXML(preferenceFile, function ( result) {

    cb(result.preferences.workspace[0]);
  });
};

function _parseXML(path, cb) {
  var xlmBuf = fs.readFileSync(path, "utf8");
  var parser = new xml2js.Parser();
  parser.parseString(xlmBuf, function (err, result) {
    cb(result);
  });
}
