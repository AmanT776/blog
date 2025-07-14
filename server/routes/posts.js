const express = require('express');
const router = express.Router();
const {getAllPosts,getPost,createPost,updatePost,deletePost} = require("../controllers/postsController");
const {protect,authorize} = require('../middlewares/auth')

router.get('/',protect,getAllPosts);
router.get('/:id',protect,getPost);
router.post('/',protect,authorize(["author"]),createPost);
router.put('/:id',protect,authorize(["author"]),updatePost);
router.delete('/:id',protect,authorize(["admin","author"]),deletePost);

module.exports = router;