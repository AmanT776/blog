const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

exports.signUp = async(req,res,next)=>{
    try{
        const {name,role,email,password} = req.body;
        // const exists = await User.findOne({email});
        // if(exists) return res.status(409).json({message: "user already exists"});
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const user = await User.create({name,role,email,password: hash});
        const token = jwt.sign({id: user._id,role: user.role},process.env.JWT_SECRET,{
            expiresIn: '1h'
        });
    res.status(200).json({token: token});
    }catch(err){
        next(err);
    }
}
exports.login = async(req,res,next)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(404).json({message: "user not found"});
        const match = await bcrypt.compare(password,user.password);
        if(!match) return res.json(401).json({message: "password doesn't match"});
        const token = jwt.sign({id: user._id,role: user.role},process.env.JWT_SECRET);
        res.json({token: token});
    }catch(err){
        next(err)
    }
}