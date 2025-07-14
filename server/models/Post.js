const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: String,
    tags: Array,
    imgUrl: String,
    avatar: String,
    excerpt: String,
    created_at: {type: Date,default: Date.now},
    updated_at: {type: Date,default: Date.now},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: "User",required: true}
});

module.exports = mongoose.model("Post",postSchema);