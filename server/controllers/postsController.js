const Post = require("../models/Post");

exports.getAllPosts = async(req,res)=>{
    try{
        const posts = await Post.find();
        if(!posts) return res.status(404).json({message: "post not found"});
        res.status(200).json(posts);
    }catch(err){
        console.log(err);
    }
}

exports.getPost = async(req,res)=>{
    try{
        const {id} = req.params;
        const post = await Post.find({user_id: id});
        if(!post) return res.status(404).json({message: "post not found"});
        console.log(post)
        res.status(200).json(post);
    }catch(err){
        console.log(err)
    }
}

exports.createPost = async(req,res)=>{
    try{
        const post = await Post.create({...req.body,user_id: req.user.id});
        res.status(200).json({message: "post created successfully"});
    }catch(err){
        console.log(err);
    }
}

exports.updatePost = async(req,res)=>{
    try{
        const {id} = req.params;
        const update = await Post.findByIdAndUpdate(id,req.body);
        res.status(200).json({message: "successfully updated"});
    }catch(err){
        console.log(err);
    }
}

exports.deletePost = async(req,res)=>{
    try{
        const {id} = req.body;
        const post = await Post.findByIdAndDelete(id);
        res.status(200).json({message: "post deleted"});
    }catch(err){
        console.log(err);
    }
}

