const express = require('express');
const router = express.Router();
const {
	createBlogPost,
	getAllBlogPosts,
	getSingleBlogPost,
	updateBlogPost,
	deleteBlogPost,
} = require('../controllers/blogController');

router.route('/').post(createBlogPost).get(getAllBlogPosts);

router
	.route('/:id')
	.get(getSingleBlogPost)
	.put(updateBlogPost)
	.delete(deleteBlogPost);

module.exports = router;
