import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostMessage.find();

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  console.log(`body`, body);

  try {
    await newPost.save();

    res.status(201).json(newPost);
    res.status(409).send(error.message);
  } catch (error) {}
};
