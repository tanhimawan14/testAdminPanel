var express		= require("express");
var router 		= express.Router();
var Blog 		= require("../models/blog");

// PANEL HOME

router.get("/panel", function(req, res){
	res.render("admin/panel");
});

// SHOW ALL BLOG FROM DATABASE
router.get("/panel/blog", function(req,res){
	Blog.find({}, function(err, allBlog){
		if(err){

		}else{
			res.render("admin/blog", {blogs: allBlog});
		}
	});
});

//  CREATE NEW DATA
router.post("/panel/blog", function(req, res){
	//get data from from and add to DB
	var title = req.body.title;
	var image =req.body.image;
	var content =req.body.content;
	var author = {
		id: req.user._id,
		username: req.user.username
	};
	var newBlog = {title: title, image: image, content: content, author: author};
	// Create new Blog and save to database
	Blog.create(newBlog, function(err, newCreated){
		if(err){
			console.log(err);
		}else{
			//redirect back to campgrounds page
			res.redirect("/panel/blog");
		}
	})
});

// NEW FORM DATA FOR CAMPGROUND
router.get("/panel/blog/new", function(req, res){
	res.render("admin/new");
});

// SHOW FULL DATA FROM ONE CAMPGROUND 
router.get("/panel/blog/:id", function(req, res){
	// find the campground with provided ID
	Blog.findById(req.params.id).exec(function(err, foundBlog){
		if(err){
			console.log(err);
		}else{
			console.log(foundBlog);
			// render show template with that campground
			res.render("admin/admin-blog", {blog: foundBlog});
		}
	});
});

// EDIT CAMPGROUND ROUTES
router.get("/panel/blog/:id/edit", function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		res.render("admin/edit", {blog: foundBlog});		
	});
});
// UPDATE CAMPGROUND ROUTES
router.put("/panel/blog/:id", function(req, res){
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
		if(err){
			res.redirect("/panel/blog/");
		}else{
			res.redirect("/panel/blog/" + req.params.id);
		}
	});
});

// DESTROY CAMPGROUND ROUTE
router.delete("/panel/blog/:id", function(req, res){
	Blog.findByIdAndRemove(req.params.id, function(err){
		if(err){
			console.log(err);
		}else{
			res.redirect("/panel/blog");
		}
	})
});


module.exports = router;