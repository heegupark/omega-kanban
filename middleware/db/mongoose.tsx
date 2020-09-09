import mongoose from 'mongoose';

declare var process: {
  env: {
    MONGODB_URL: string;
  };
};
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
