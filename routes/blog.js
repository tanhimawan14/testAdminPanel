var express		= require("express");
var router 		= express.Router();
var Blog 		= require("../models/blog");

router.get("/blogs", function(req, res){
	Blog.find({}, function(err, allBlogs){
		if(err){
			console.log(err);
		}else{
			res.render("main/blogindex", {blogs: allBlogs});
		}
	});
});

// SHOW FULL DATA FROM ONE CAMPGROUND 
router.get("/blogs/:id", function(req, res){
	// find the campground with provided ID
	Blog.findById(req.params.id).exec(function(err, foundBlog){
		if(err){
			console.log(err);
		}else{
			res.render("main/show-blog.ejs", {blog: foundBlog});
		}
	});
});

module.exports= router;