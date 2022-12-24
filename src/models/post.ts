import { Schema, model } from 'mongoose';

interface IPost {
  title: String,
  contents: String,
};

const postSchema = new Schema<IPost>({
  title: { type: String, required: true },
  contents: { type: String, required: true },
});

const Post = model<IPost>('Post', postSchema);

export default Post;
