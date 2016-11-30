var mongoose=require("mongoose");
var Blog = require("./models/blog");

var data=[
	{
		title: "Cloud's Rest", 
		image: "http://visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg",
		content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		title: "Dessert Mesa", 
		image: "http://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5115588.jpg",
		content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		title: "Abadon Village", 
		image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-YnNsqL4B6VIyun6yoBUeUML1Phh3pBrxhd1N3N-eVKkn8YWe",
		content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	}
]

function seedDB2(){
	data.forEach(function(seed){
		Blog.create(seed, function(err, blog){
			if(err){
				console.log(err);
			}else{
				console.log("Added a blog");
				blog.save();
			}
		});
	});
}


module.exports = seedDB2;