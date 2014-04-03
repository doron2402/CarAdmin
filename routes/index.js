//Add routes from other files
var db = require('./database');
var coll = require('./collection');
var doc = require('./document');
var auth = require('./auth');
exports.viewDatabase = db.viewDatabase;

exports.viewCollection = coll.viewCollection;
exports.addCollection = coll.addCollection;
exports.deleteCollection = coll.deleteCollection;
exports.renameCollection = coll.renameCollection;

exports.viewDocument = doc.viewDocument;
exports.updateDocument = doc.updateDocument;
exports.deleteDocument = doc.deleteDocument;
exports.addDocument = doc.addDocument;
exports.loginPage = auth.login;
exports.authenticate = auth.authenticate;

//Homepage route
exports.index = function(req, res) {
  var ctx = {
    title: 'Car Admin',
    info: false
  };



  if (typeof req.adminDb == "undefined") {
    return res.render('index');
  }

  return res.render('index', ctx);

};
