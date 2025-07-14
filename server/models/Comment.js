const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: String,
    created_at: Date,
    updated_at: Date,
    user_id: {type: mongoose.Schema.Types.ObjectId,ref: "User" , required: true},
    post_id: {type: mongoose.Schema.Types.ObjectId,ref: "Post", required: true}
});

exports.Comment = mongoose.model("Comment",commentSchema);