var mongoose=require("mongoose");
var User = require("./models/user");



function seedDB(){
	var newUser = new User({username: "admin3"});
	User.register(newUser, "admin3", function(err, user){
		if(err){
			console.log(err);
		}else{
			console.log(user);
		}
		// passport.authenticate("local")(req, res, function(){
		// 	console.log(user);
		// });
	});
}

module.exports = seedDB;