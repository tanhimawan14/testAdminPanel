var bodyParser		= require("body-parser"),
	// flash			= require("connect-flash"),
	express			= require("express"),
	mongoose		= require("mongoose"),
	passport		= require("passport"),
	LocalStrategy	= require("passport-local"),
	methodOverride	= require("method-override"),
	// MODELS - DATABASE
	User 			= require("./models/user"),
	Blog			= require("./models/blog"),
	seedDB			= require("./seeds"),
	seedDB2			= require("./seeds2")
// CONFIG ROUTES
var indexRoutes		= require("./routes/index"),
	adminRoutes 	= require("./routes/admin-menu"),
	blogRoutes		= require("./routes/blog"),
	specialRoutes	= require("./routes/admin-special")
// CONFIG EXPRESS NAME 
var app				= express();
var port			= process.env.PORT || 3000;

// CONFIG FRAMEWORK TO WORK	
	// FOR CONNECT TO LOCAL MONGODB DATABASE
mongoose.connect("mongodb://localhost/library");
	// TO MAKE "EJS" READ AS MAIN .FILE AT PROGRAM
app.set("view engine", "ejs");
	// PARSE INCOMING REQUEST BODY IN A MIDDLEWARE
app.use(bodyParser.urlencoded({extended: true}));
	// SERVERING THE CONTENT FROM LIBRARY
app.use(express.static(__dirname + "/public"));
	// TO MAKE METHOD-OVERRIDE TO DELETE & PUT
app.use(methodOverride("_method"));
	// USE FLASH
// app.use(flash());

// seedDB();
// seedDB2();

// CONFIG PASSPORT
app.use(require("express-session")({
	secret				: "SECRET",
	resave				: false,
	saveUninitialized	: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});

app.use(indexRoutes);
app.use(adminRoutes);
app.use(blogRoutes);
app.use(specialRoutes);

// ===========
// CONFIG PORT
// ===========

app.listen(port, function(){
	console.log("Application Work Properly");
});