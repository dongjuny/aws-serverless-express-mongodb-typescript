import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

function connectMongoDB() {
  return mongoose.connect(`mongodb+srv://${process.env.MONGO_ATLAS_USERNAME}:${process.env.MONGO_ATLAS_PASSWORD}@${process.env.MONGO_ATLAS_URL}/?retryWrites=true&w=majority`);
};

export {
  connectMongoDB,
};
