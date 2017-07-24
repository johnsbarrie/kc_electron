var fs = require('fs');
var xml2js = require('xml2js');
var osenv = require('osenv');
var path = require('path');
//ipcMain.on('synchronous-message', (event, arg) => {
const navObject = [];
_getWorkSpace(function (workspace) {
  _readProjects(navObject, workspace, function (projects){
    projects.map(function (project){
      var projectObject = {
        name: project,
        path: path.resolve(workspace, project),
        shots: []
      };
      navObject.push(projectObject);
      _readShotsFromProject(projectObject);
    });
    console.log(navObject);
  });
});
//});

function _readProjects (navObject, workspace, cb) {
  _listDir(workspace, function (projects) {
    cb(projects);
  });
};

function _readShotsFromProject(projectObject) {
  var shotsArray = projectObject['shots'];
  var shotsPath = path.resolve(projectObject['path'], 'shots');
  _listDir(shotsPath, function(shots){
    shots.map(function(shot){
      var shotObject = {};
      var shotPath = path.resolve(shotsPath, shot);
      shotObject['path'] = shotPath;
      shotObject['shot'] = shot;
      shotsArray.push(shotObject);
      //console.log(shotObject);
      // var path = [shotPath, 'shot.xml'].join('/');
      // _parseXML(path, function(xml){
      // console.log(xml.shot.timeline[0].layers[0].layer[0].image);
      // });
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
