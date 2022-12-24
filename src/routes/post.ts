import * as Express from "express";
import Post from '../models/post';

const router = Express.Router();

router.post("/", async (_, res)=> {
  await Post.create({
    title: 'title',
    contents: 'content'
  })
  res.json("Success");
});

router.get("/", async (_, res)=> {
  const posts = await Post.find();

  res.json({
    result: posts,
  })
});

export default router;
