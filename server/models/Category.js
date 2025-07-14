const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: String,
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
});

exports.Category = mongoose.model("Category",categorySchema);