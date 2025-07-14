const Category = require("../models/Category");

exports.getCategories = async(req,res)=>{
    try{
        const categories = await Category.find();
        if(!categories) return res.status(404).json({message: "category not found"});
        res.status(200).json(categories)
    }catch(err){
        console.log(err);
    }
}

exports.createCategory = async(req,res)=>{
    try{
        const category = Category.create(req.body);
        res.status(200).json({message: "category added"});
    }catch(err){
        console.log(err);
    }
}