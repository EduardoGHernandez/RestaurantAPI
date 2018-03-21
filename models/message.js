'use strict'

var mongoose =  require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = Schema({
	text : String,
	created_at : String,
	emitter : {type:Schema.ObjectId, ref:'user'},
	receiver: {type:Schema.ObjectId, ref:'user'}
});


module.exports = mongoose.model('message', messageSchema);
