var express= require("express");
var Product = require("../models/products");
var multer = require('multer');
var DIR = './public/uploads/';
var router = express.Router();

var mongojs = require("mongojs");

var db = mongojs('mongodb://webphim:webphim@ds137101.mlab.com:37101/webphim',['webphim']);

/*router.get("/test",function(req,res,next){
	db.webphim.find(function(err,docs){
		if(err){
			res.send(err);
		}
		res.json(docs);
	});
});*/


var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, DIR)
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	}
})

var upload = multer({ storage: storage}).single('photo');//array('file', 2); cho nhieu sp
var upload_hinh = multer({ storage: storage}).single('hinh');
router.post('/addvideo', function (req, res, next) {
	var path = '';

	upload(req, res, function (err) {
		if (err) {
	      // An error occurred when uploading
	      console.log(err);
	      return res.status(422).send("an Error occured")
	  }  
	  path = req.file.path;
	    console.log(path);
	    return res.send("Thêm video thành công "); 
	});
});

router.post('/addhinh', function (req, res, next) {
	var path = '';

	upload_hinh(req, res, function (err) {
		if (err) {
	      // An error occurred when uploading
	      console.log(err);
	      return res.status(422).send("an Error occured")
	  }  
	  path = req.file.path;
	    console.log(path);
	    return res.send("Thêm hình đại diện thành công "); 
	});
});
// POST PRODUCT
router.post("/add",function(req,res,next){
	var newProduct = new Product({
		ten: req.body.ten,
		hinh: req.body.hinh,
		link: req.body.link,
		the_loai: req.body.the_loai,
		quoc_gia: req.body.quoc_gia,
		dien_vien: req.body.dien_vien,
		thoi_luong: req.body.thoi_luong,
		nam_phat_hanh: req.body.nam_phat_hanh
	});
	// db.webphim.count mongodb online
	db.webphim.count({ten: newProduct.ten}, function(err,count){
		if(err){
			throw err;
		}else{
			if(count === 0){
				db.webphim.save(newProduct,function(err){
					if(err){
						res.json({success: false,msg:'ADD error'});
					}else{
						res.json({success: true,msg:'ADD success'});		
					}
				});
				
			}else{
				res.json({success: false,msg:'ADD error'});
			}
		}
	});
});

// DELETE PRODUCT VIA ID
router.delete("/delete/:id",function(req,res,next){
	id = req.params.id;
	// db.webphim mongodb online
	db.webphim.remove({_id: id},function(err){
		if(err ){
			res.json({success: false,msg:'Delete wrong'});
		}else{
			res.json({success: true,msg:'Delete success'});
		}
	});
});
// GET ALL PRODUCT
router.get("/get",function(req,res,next){
	// FIND PRODUCT VIA NAME
	// db.webphim mongodb online
	db.webphim.find({},function(err,docs){
		if(err){
			res.json({success: false,msg:'Not product'});
		}else{
			// Check exits product
			if(docs.length != 0){
				res.json(docs);
				// Update product
			}else{
				// NON EXITS
				res.json({success: false,msg:'Not product'});
			}
		}
	});
});
// GET PRODUCT VIA NAME
router.get("/get/:name",function(req,res,next){
	name = req.params.name;
	// FIND PRODUCT VIA NAME
	// db.webphim mongodb online
	db.webphim.find({ten: name},function(err,docs){
		if(err){
			res.json({success: false,msg:'Not product'});
		}else{
			// Check exits product
			if(docs.length != 0){
				res.json(docs);
				// Update product
			}else{
				// NON EXITS
				res.json({success: false,msg:'Not product'});
			}
		}
	});
});
// GET PROUDUCT VIA FIELD
router.get("/get-filde/:name",function(req,res,next){
	the_loai = req.params.name;
	// FIND PRODUCT VIA NAME
	// db.webphim mongodb online
	db.webphim.find({the_loai: the_loai},function(err,docs){
		if(err){
			res.json({success: false,msg:'Not product'});
		}else{
			// Check exits product
			if(docs.length != 0){
				res.json(docs);
				// Update product
			}else{
				// NON EXITS
				res.json({success: false,msg:'Not product'});
			}
		}
	});
});
// GET PROUDUCT VIA NATION
router.get("/nation/:name",function(req,res,next){
	quoc_gia = req.params.name;
	// FIND PRODUCT VIA NAME
	// db.webphim mongodb online
	db.webphim.find({quoc_gia: quoc_gia},function(err,docs){
		if(err){
			res.json({success: false,msg:'Not product'});
		}else{
			// Check exits product
			if(docs.length != 0){
				res.json(docs);
				// Update product
			}else{
				// NON EXITS
				res.json({success: false,msg:'Not product'});
			}
		}
	});
});
// GET PROUDUCT VIA KEYWORD FROM SEARCH NAME
router.get("/search/:name",function(req,res,next){
	ten = req.params.name;
	// FIND PRODUCT VIA NAME
	// db.webphim mongodb online
	db.webphim.find({ten: new RegExp(ten, "i")},function(err,docs){
		if(err){
			res.json({success: false,msg:'Not product'});
		}else{
			// Check exits product
			if(docs.length != 0){
				
				res.json({success: true,docs});
				// Update product
			}else{
				// NON EXITS
				res.json({success: false,msg:'Not product'});
			}
		}
	});
});
// UPDATE 
router.put("/put/:name",function(req,res,next){
	// CREATE NEW UPDATE PRODUCT FROM FORM VIA NAME
	var id = req.params.name;
	// db.webphim mongodb online
	db.webphim.findOneAndUpdate({ten:id}, req.body, function (err, place) {
		if(err){
			res.json({success: false,msg:'Not update product'});
		}else{
			// Check have exits products
			// Unless infrom or alert by json
			if(place != null){
				res.json({success: true,msg:'Update success'});
			}else{
				res.json({success: false,msg:'Update wrong because not find product'});
			}
		}
	});
})
module.exports = router;