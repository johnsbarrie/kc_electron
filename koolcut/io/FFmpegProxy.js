var {spawn} = require('child_process');
var ffmpegPath = require('ffmpeg-static').path.replace('app.asar', 'app.asar.unpacked');

var FFmpegProxyClass = (function () {
  function FFmpegProxy() {}
  
  PreferenceProxy.prototype.startProcess = function (stdout_cb, stderr_cb){
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
  }

  return FFmpegProxy;
})();

var FFmpegProxy = new FFmpegProxy();
exports.PreferenceProxy = FFmpegProxy;
