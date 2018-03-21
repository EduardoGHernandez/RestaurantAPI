'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var publicationSchema = Schema({
	text: String,
	file: String,
	created_at: String,
	user: {type: Schema.ObjectId, ref:'user'}
});

module.exports = mongoose.model('publication', publicationSchema);
