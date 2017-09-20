var fs = require('fs');
var xml2js = require('xml2js');
var osenv = require('osenv');
var path = require('path');
var { PreferenceProxy } = require('./PreferenceProxy');

const navObject = [];
var ProjectsProxyClass = (function () {
  function ProjectsProxy() {
    this.shotNavigationMap = [];
  }

  ProjectsProxy.prototype.mapFromPath = function (workspace, cb) {
    this.createNavObject(PreferenceProxy.workspace, cb);
  }

  ProjectsProxy.prototype.createNavObject = function (workspace, cb) {
    this._readProjects(navObject, workspace, function (projects){

      projects.map(function (project){
        var projectObject = {
          name: project,
          path: path.resolve(workspace, project),
          shots: []
        };
        navObject.push(projectObject);
        this._readShotsFromProject(projectObject);
      }.bind(this));

      this.shotNavigationMap.push(navObject);
      cb(navObject);
    }.bind(this));
  }

  ProjectsProxy.prototype._readProjects = function (navObject, workspace, cb) {
    this._listDir(workspace, function (projects) {
      cb(projects);
    });
  };

  ProjectsProxy.prototype._readShotsFromProject = function (projectObject) {
    var shotsArray = projectObject['shots'];
    var shotsPath = path.resolve(projectObject['path'], 'shots');
    this._listDir(shotsPath, function(shots){
      shots.map(function(shot){
        var shotObject = {};
        var shotPath = path.resolve(shotsPath, shot);
        shotObject['path'] = shotPath;
        shotObject['name'] = shot;
        shotsArray.push(shotObject);
      });
    });
  }

  ProjectsProxy.prototype._listDir = function (path, cb) {
    cb(fs.readdirSync(path).filter(function(file){
      if (! /^\./.test(file)) { return true; }
      return false;
    }));
  }

   return ProjectsProxy;
 })();

 exports.ProjectsProxy = new ProjectsProxyClass();
