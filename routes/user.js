var express= require("express");
var User = require("../models/user");
var bcrypt = require('bcrypt-nodejs');
var router = express.Router();
//Ham dang ky

var mongojs = require("mongojs");

var db = mongojs('mongodb://webphim:webphim@ds137101.mlab.com:37101/webphim',['user']);

router.post("/signup",function(req,res,next){
	var newUser = new User();
	newUser.username = req.body.username;
	newUser.password = encryptPassword(req.body.password);
	newUser.email =req.body.email;
	// change host mongodb online db.user
	db.user.count({username: newUser.username}, function(err,count){
		if(err){
			throw err;
		}else{
			if(count === 0){
				db.user.save(newUser,function(err){
					if(err){
						res.json({success: false,msg:'Đăng ký không thành công '});
					}else{
						res.json({success: true,msg:'Đăng ký thành công '});		
					}
				});
			}else{
				res.json({success: false,msg:'Tài khoản đã tồn tại'});
			}
		}
	});

});
//Ham dang nhap
router.post("/signin",function(req,res,next){
	var username = req.body.username;
	db.user.findOne({'username': username},function(err,user){
		if(err){
			return res.json(err);
		}
		if(!user){
			res.json({success: false,msg:'Đăng nhập không thành công'});
		}else{
			// so sanh ket qua 
			//true la tồn tại tk
			//false la k tồn tại hoặc password sai
			var password = user.password;
			kt = validPassword(req.body.password,password);
			if(!kt){
				res.json({success: false,msg:'Đăng nhập không thành công'});
			}else{
				res.json({success: true,username: user.username, email: user.email});	
			}
			
		}
	});
});
//ham bam tim pass ma hoa
function validPassword(password,password_mahoa){
	return bcrypt.compareSync(password,password_mahoa);
}
//ham bam password
function encryptPassword(password){
	return bcrypt.hashSync(password,bcrypt.genSaltSync(5),null);
};
module.exports = router;