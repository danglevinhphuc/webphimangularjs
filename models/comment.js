var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
	name: {type:String,required : true},
	email: {type:String,required : true},
	comment:{type:String,required : true},
	id_video: {type: String, required: true}
},{collection: "comment"});

var Comment = module.exports = mongoose.model("Comment",productSchema);
