var express= require("express");
var Comment = require("../models/comment");
var DIR = './public/uploads/';
var router = express.Router();

var mongojs = require("mongojs");

var db = mongojs('mongodb://webphim:webphim@ds137101.mlab.com:37101/webphim',['comment']);

router.get("/get/:id",function(req,res,next){
	id = req.params.id;

	db.comment.find({id_video:id},function(err,docs){
		if(err){
			res.send(err);
		}
		res.json(docs);
	});
});

router.post('/post/comment', function (req, res, next) {
	
	var newComment = new Comment({
		name: req.body.name,
		email: req.body.email,
		comment: req.body.comment,
		id_video : req.body.id_video
	});
	
	db.comment.save(newComment,function(err){
		if(err){
			res.json({success: false,msg:'ADD error'});
		}else{
			res.json({success: true,msg:'ADD success'});		
		}
	});
});

module.exports = router;