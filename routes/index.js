var express		= require("express");
var router 		= express.Router();
var passport 	= require("passport");
var User 		= require("../models/user");


	// HOME
router.get("/", function(req, res){
	res.render("home");
});

	// SIGN-IN FROM
router.get("/admin", function(req, res){
	res.render("admin-login");
});
	//  HANDLE LOGIN
router.post("/admin", passport.authenticate("local", {
	successRedirect	: "/",
	failureRedirect : "/admin"
}), function(req, res){

	});

	// LOGOUT LOGIC ROUTES
router.get("/logout", function(req, res){
	req.logout();
	res.redirect("/");

});


module.exports = router;