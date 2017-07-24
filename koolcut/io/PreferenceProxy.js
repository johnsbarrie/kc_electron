var osenv = require('osenv');
var xml2js = require('xml2js');
var fs = require('fs');
var PreferenceProxyClass = (function () {
  function PreferenceProxy() {
    this.workspace = null;
  }

  PreferenceProxy.prototype.load = function (cb) {
    var preferenceFile = osenv.home() + '/Library/Preferences/com.lamenagerie.koolcapture/Local Store/settings/preference.xml';

    this._parseXML(preferenceFile, function (result) {
      if (result){
        this.workspace = result.preferences.workspace[0];
        cb(true);
      }else{
        cb(false);
      }
    }.bind(this));
  };

  PreferenceProxy.prototype._parseXML = function(path, cb) {
    var xlmBuf;
    try {
      xlmBuf = fs.readFileSync(path, "utf8");
    } catch (e) {
      cb(false);
    }
    var parser = new xml2js.Parser();

    parser.parseString(xlmBuf, function (err, result) {
      cb(result);
    });
  }

  return PreferenceProxy;
})();

var PreferenceProxy = new PreferenceProxyClass();
exports.PreferenceProxy = PreferenceProxy;
