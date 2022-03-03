import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on('open', () => console.log('connected to mongo'))
  .on('error', (err) => console.log(err));

//connection setup ends helper

//create schema object

const boardSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
  },
  { timestamp: true }
);
export const connection = mongoose;
export const Board =
  mongoose.models.Board || mongoose.model('Board', boardSchema);
