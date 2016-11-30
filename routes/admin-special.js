var express = require("express")
var router = express.Router();
var User = require("../models/user");

router.get("/panel/admin", function(req,res){
	User.find({}, function(err, allUser){
		if(err){

		}else{
			res.render("admin/menu-admin", {users: allUser});
		}
	});
});

router.get("/panel/admin/new", function(req, res){
	res.render("admin/new-admin");
});

router.post("/panel/admin/new", function(req, res){
	var newUser = new User({username: req.body.username});

	User.register(newUser, req.body.password, function(err, user){
		if(err){
			return res.redirect("/panel/admin/new");
		}else{
			console.log(user);
			res.redirect("/panel/admin");
		}
	});
});
	// EDIT ROUTES - STILL CRASH
router.get("/panel/admin/edit/:user_id", function(req, res){
	User.findById(req.params.user_id, function(err, foundUser){
		res.render("admin/edit-admin", {user_id: req.params.user_id, user: foundUser});		
	});
});

router.put("/panel/admin/:user_id", function(req, res){
	
	
	User.findByIdAndUpdate(req.params.user_id, req.body.password, function(err, updatedUser){
		if(err){
			return res.redirect("/panel/admin/");
		}else{
			console.log(user);
			res.redirect("/panel/admin/");
		}
	});
});

router.delete("/panel/admin/:id", function(req, res){
	User.findByIdAndRemove(req.params.id, function(err){
		if(err){
			console.log(err);
		}else{
			res.redirect("/panel/admin");
		}
	})
});

module.exports = router;