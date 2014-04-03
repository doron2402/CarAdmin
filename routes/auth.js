var auth = {};

auth.authenticate = function(req ,res){
	console.log(req.body);
	if (req.body && req.body.username && req.body.password) {
		if (req.body.username === 'doron' && req.body.password === 'amir') {
			req.session = {};
			req.session.authenticate = 'ken';
			return res.render('index', {title: 'Car Admin'});
		}
	}else {
		//nothing..
		res.render('login', {title: "Login Page - Again..."});
	}
};

auth.logout = function(req, res) {
	res.session = null;
};

auth.login = function(req, res) {

	var ctx = {
    	title: 'Login Page'
  	};

  	return res.render('login', ctx);
};

module.exports = auth;