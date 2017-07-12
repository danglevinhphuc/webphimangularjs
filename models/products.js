var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
	ten: {type:String,required : true},
	link: {type:String,required : true},
	hinh:{type:String,required : true},
	the_loai: {type:String,required : true},
	quoc_gia: {type:String,required : true},
	dien_vien: {type:String,required : true},
	thoi_luong: {type:Number,required : true},
	nam_phat_hanh: {type:String,required : true},
},{collection: "webphim"});

var Products = module.exports = mongoose.model("Webphim",productSchema);
