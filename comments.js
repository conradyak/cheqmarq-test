var mongoose = require('mongoose');


var CommentSchema = mongoose.Schema({
 name: String,
 text: String,
 createdAt: Date,
});

var Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment;
