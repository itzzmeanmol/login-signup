var express = require("express"),
	app = express();

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/login",function(req,res){
	res.render("login");
});

app.get("/signup",function(req,res){
	res.render("signup");
});

app.get("/forgot",function(req,res){
	res.render("forgot");
});

app.listen(process.env.PORT, process.env.IP ,function(){
	console.log("Server Started");
});