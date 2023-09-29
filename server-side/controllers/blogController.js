const Blog = require('../models/Blog');
const { StatusCodes } = require('http-status-codes');

const createBlogPost = async (req, res) => {
	try {
		const { title, description, restaurant_id } = req.body;

		const newBlogPost = new Blog({
			title,
			description,
			restaurant_id,
		});

		await newBlogPost.save();

		res.status(StatusCodes.CREATED).json({
			message: 'Blog post created successfully',
		});
	} catch (error) {
		console.error(error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: 'Server error',
		});
	}
};

const getAllBlogPosts = async (req, res) => {
	try {
		const blogPosts = await Blog.find();

		res.json(blogPosts);
	} catch (error) {
		console.error(error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: 'Server error',
		});
	}
};

const getSingleBlogPost = async (req, res) => {
	try {
		const blogPostId = req.params.id;

		const blogPost = await Blog.findById(blogPostId);

		if (!blogPost) {
			return res
				.status(StatusCodes.NOT_FOUND)
				.json({ message: 'Blog post not found' });
		}

		res.json(blogPost);
	} catch (error) {
		console.error(error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: 'Server error',
		});
	}
};

const updateBlogPost = async (req, res) => {
	try {
		const blogPostId = req.params.id;
		const updatedData = req.body;

		const blogPost = await Blog.findByIdAndUpdate(blogPostId, updatedData, {
			new: true,
		});

		if (!blogPost) {
			return res
				.status(StatusCodes.NOT_FOUND)
				.json({ message: 'Blog post not found' });
		}

		res.json(blogPost);
	} catch (error) {
		console.error(error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: 'Server error',
		});
	}
};

const deleteBlogPost = async (req, res) => {
	try {
		const blogPostId = req.params.id;

		const blogPost = await Blog.findByIdAndRemove(blogPostId);

		if (!blogPost) {
			return res
				.status(StatusCodes.NOT_FOUND)
				.json({ message: 'Blog post not found' });
		}

		res.json({ message: 'Blog post deleted successfully' });
	} catch (error) {
		console.error(error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: 'Server error',
		});
	}
};

module.exports = {
	createBlogPost,
	getAllBlogPosts,
	getSingleBlogPost,
	updateBlogPost,
	deleteBlogPost,
};
