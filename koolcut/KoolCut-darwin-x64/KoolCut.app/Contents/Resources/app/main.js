
import { app, BrowserWindow } from 'electron';
import JohnDood from './io/JohnDood';
//var ReadingProjects = require('./js/backend/ReadingProjects');
//var csvCreator = require('./io/CSV');
var dood = new JohnDood();
//console.log(JohnDood);
dood.john();
/*
var {spawn} = require('child_process');
var ffmpegPath = require('ffmpeg-static').path.replace('app.asar', 'app.asar.unpacked');

var ffmpeg = spawn(ffmpegPath,
  ['-i',
  '/Users/javanai/Documents/KoolCapture/Film/shots/counting/png/view%07d.png',
  '-c:v', 'libx264', '-pix_fmt', 'yuv420p',
  '/Users/javanai/Desktop/john.mp4']);

ffmpeg.stdout.on( 'data', data => {
  console.log( `stdout: ${data}` );
});

ffmpeg.stderr.on( 'data', data => {
  console.log( `stderr: ${data}` );
});

const { ipcMain } = require('electron');
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
*/

app.on('ready', function() {
	 var mainWindow = new BrowserWindow({width: 1360, minWidth: 700, minHeight: 400, height: 800, show:false, icon: __dirname + '/kool-icon.icns', webSecurity: false});
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
