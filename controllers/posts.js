import Mongoose from "mongoose";
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

  try {
    await newPost.save();

    res.status(201).json(newPost);
    res.status(409).send(error.message);
  } catch (error) {}
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!Mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post found with that ID");

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  console.log("updatedPost :>> ", updatedPost);

  res.json(updatedPost);
};
