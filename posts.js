const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('user', 'username avatar');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Create a post
router.post('/', async (req, res) => {
  const { content, userId } = req.body;
  try {
    const post = new Post({ content, user: userId });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
