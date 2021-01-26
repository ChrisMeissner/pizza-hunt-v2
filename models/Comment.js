const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
  writtenBy: {
    type: String
  },
  commentBody: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

//create the comment model using the CommentSchema
const Comment = model('Comment', CommentSchema);

// export the comment model
module.exports = Comment;